import { ExternalLink, Gamepad2, LoaderCircle, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { SiteCopy } from "../content";

interface GameEmbedProps {
  content: SiteCopy;
  externalMediaAllowed: boolean;
  onOpenCookieSettings: () => void;
}

export function GameEmbed({ content, externalMediaAllowed, onOpenCookieSettings }: GameEmbedProps) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const gameUrl = import.meta.env.VITE_GAME_URL?.trim() ?? "";
  const isExternal = useMemo(() => {
    if (!gameUrl || typeof window === "undefined") return false;
    try {
      return new URL(gameUrl, window.location.origin).origin !== window.location.origin;
    } catch {
      return false;
    }
  }, [gameUrl]);

  if (!gameUrl) {
    return (
      <div className="game-placeholder" id="game-embed">
        <Gamepad2 aria-hidden="true" />
        <p>{content.puzzle.gameSoon}</p>
      </div>
    );
  }

  if (isExternal && !externalMediaAllowed) {
    return (
      <div className="game-placeholder" id="game-embed">
        <ExternalLink aria-hidden="true" />
        <p>{content.puzzle.gameConsent}</p>
        <button type="button" className="button button-secondary" onClick={onOpenCookieSettings}>
          {content.puzzle.openSettings}
        </button>
      </div>
    );
  }

  if (!open) {
    return (
      <div className="game-placeholder" id="game-embed">
        <Gamepad2 aria-hidden="true" />
        <p>{content.puzzle.gameReady}</p>
        <button type="button" className="button button-primary" onClick={() => setOpen(true)}>
          {content.puzzle.play}
        </button>
      </div>
    );
  }

  return (
    <div className="game-frame-shell" id="game-embed">
      <div className="game-frame-toolbar">
        <span>{content.puzzle.frameTitle}</span>
        <button type="button" onClick={() => setOpen(false)} aria-label={content.puzzle.closeGame}>
          <X aria-hidden="true" />
        </button>
      </div>
      {!loaded && <div className="game-loading"><LoaderCircle aria-hidden="true" /> {content.puzzle.loading}</div>}
      <iframe
        src={gameUrl}
        title={content.puzzle.frameTitle}
        allow="fullscreen; gamepad; autoplay"
        allowFullScreen
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-forms"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
