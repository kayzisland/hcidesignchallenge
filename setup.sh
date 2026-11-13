#!/usr/bin/env bash
# setup.sh - install everything needed to run hcidesignchallenge.
#
# Usage (put this file in the repo root, then run from there):
#   bash setup.sh               # app dependencies + Python figure tools
#   bash setup.sh --no-python   # skip the Python part
#
# Installs:
#   1. Node.js (via nvm) if it's missing or too old
#   2. npm packages for onboarding/ (exact versions from package-lock.json)
#   3. matplotlib for research/figures/make_affinity.py (optional)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Works whether this file sits in the repo root or inside onboarding/
if [[ -z "${REPO_ROOT:-}" ]]; then
  if [[ -f "$SCRIPT_DIR/package.json" ]]; then
    REPO_ROOT="$(dirname "$SCRIPT_DIR")"   # script is inside onboarding/
  else
    REPO_ROOT="$SCRIPT_DIR"                # script is in the repo root
  fi
fi
APP_DIR="$REPO_ROOT/onboarding"
NODE_TARGET=24          # LTS line that satisfies every engine in the lockfile
NVM_VERSION=v0.40.3
WITH_PYTHON=1
[[ "${1:-}" == "--no-python" ]] && WITH_PYTHON=0

say()  { printf '\n\033[1;34m==>\033[0m %s\n' "$*"; }
fail() { printf '\n\033[1;31mERROR:\033[0m %s\n' "$*" >&2; exit 1; }

[[ -f "$APP_DIR/package.json" ]] || fail "Can't find $APP_DIR/package.json. Run this from the repo root or set REPO_ROOT."

# ---- 1. Node.js ---------------------------------------------------------
# Strictest requirement in the lockfile: ^22.20 || ^24.12 || >=25
node_ok() {
  command -v node >/dev/null 2>&1 || return 1
  local v major minor
  v="$(node -p 'process.versions.node')"
  major="${v%%.*}"; minor="$(echo "$v" | cut -d. -f2)"
  (( major >= 25 )) && return 0
  (( major == 24 && minor >= 12 )) && return 0
  (( major == 22 && minor >= 20 )) && return 0
  return 1
}

if node_ok; then
  say "Node $(node -v) found - OK"
else
  say "Node missing or too old ($(node -v 2>/dev/null || echo none)). Installing Node $NODE_TARGET via nvm..."
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  if [[ ! -s "$NVM_DIR/nvm.sh" ]]; then
    curl -fsSL "https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh" | bash
  fi
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
  nvm install "$NODE_TARGET"
  nvm use "$NODE_TARGET"
  nvm alias default "$NODE_TARGET" >/dev/null   # so new terminals use it too
  node_ok || fail "Node install didn't give a compatible version."
  say "Now using Node $(node -v) (set as nvm default)"
  NODE_SWITCHED=1
fi

# ---- 2. npm packages ----------------------------------------------------
say "Installing app packages in onboarding/ ..."
cd "$APP_DIR"
if [[ -f package-lock.json ]]; then
  npm ci            # exact versions from the lockfile
else
  npm install
fi

# ---- 3. Python (optional) -----------------------------------------------
if (( WITH_PYTHON )); then
  if command -v python3 >/dev/null 2>&1; then
    # Use a private virtual environment so we never touch the system/Homebrew Python
    VENV="$REPO_ROOT/research/figures/.venv"
    say "Installing matplotlib into $VENV ..."
    if python3 -m venv "$VENV" && "$VENV/bin/python" -m pip install --quiet --upgrade pip \
       && "$VENV/bin/python" -m pip install --quiet "matplotlib>=3.8"; then
      echo "    Run the figure script with: $VENV/bin/python research/figures/make_affinity.py"
    else
      echo "WARNING: matplotlib install failed - only needed for make_affinity.py; the app still works."
    fi
  else
    echo "WARNING: python3 not found - skipping matplotlib (only needed for research figures)."
  fi
fi

if [[ "${NODE_SWITCHED:-0}" == 1 ]]; then
  echo
  echo "NOTE: open a new terminal (or run 'nvm use $NODE_TARGET') before 'npm run dev',"
  echo "      otherwise this terminal may still be on your old Node version."
fi

say "Done! Start the app with:"
echo "    cd onboarding && npm run dev     # http://localhost:5173"
echo "    cd onboarding && npm test        # run tests"
