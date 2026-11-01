interface Props {
  message: string;
  mood?: 'happy' | 'think' | 'cheer';
}

/** "Pip" the friendly guide. The message is a polite live region so screen readers hear reactions. */
export function Mascot({ message, mood = 'happy' }: Props) {
  return (
    <div className="mascot">
      <div className={`pip pip-${mood}`} aria-hidden="true">
        <span className="pip-face">{mood === 'cheer' ? '🥳' : mood === 'think' ? '🤔' : '🙂'}</span>
      </div>
      <p className="bubble" role="status" aria-live="polite"><strong>Pip:</strong> {message}</p>
    </div>
  );
}
