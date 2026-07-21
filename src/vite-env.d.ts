/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GAME_URL?: string;
  readonly VITE_STEAM_URL?: string;
  readonly VITE_DEVELOPMENT_URL?: string;
  readonly VITE_CONTACT_ENDPOINT?: string;
  readonly VITE_CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
