import type { AppState, Screen } from '../state/types';
import type { Update } from '../state/store';

export interface ScreenProps {
  state: AppState;
  update: Update;
  go: (screen: Screen) => void;
}
