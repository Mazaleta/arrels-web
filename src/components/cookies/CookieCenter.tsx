import { Cookie, Leaf, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { SiteCopy } from "../../content";

export type CookiePreferences = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  externalMedia: boolean;
};

const STORAGE_KEY = "arrels-cookie-preferences";

export const defaultCookiePreferences: CookiePreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  externalMedia: false,
};

export function readCookiePreferences(): { preferences: CookiePreferences; decided: boolean } {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { preferences: defaultCookiePreferences, decided: false };
    const saved = JSON.parse(raw) as Partial<CookiePreferences>;
    return {
      decided: true,
      preferences: {
        necessary: true,
        preferences: Boolean(saved.preferences),
        analytics: Boolean(saved.analytics),
        externalMedia: Boolean(saved.externalMedia),
      },
    };
  } catch {
    return { preferences: defaultCookiePreferences, decided: false };
  }
}

interface CookieCenterProps {
  content: SiteCopy;
  preferences: CookiePreferences;
  decided: boolean;
  onChange: (preferences: CookiePreferences) => void;
  openSettingsSignal?: number;
  openPolicySignal?: number;
}

type DialogView = "preferences" | "policy";

export function CookieCenter({ content, preferences, decided, onChange, openSettingsSignal = 0, openPolicySignal = 0 }: CookieCenterProps) {
  const [dialogView, setDialogView] = useState<DialogView | null>(null);
  const [draft, setDraft] = useState(preferences);
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setDraft(preferences), [preferences]);

  useEffect(() => {
    if (openSettingsSignal > 0) setDialogView("preferences");
  }, [openSettingsSignal]);

  useEffect(() => {
    if (openPolicySignal > 0) setDialogView("policy");
  }, [openPolicySignal]);

  useEffect(() => {
    if (!dialogView) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDialogView(null);
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), a[href], select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [dialogView]);

  const persist = (next: CookiePreferences) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // The choice still applies for this page load if storage is unavailable.
    }
    onChange(next);
  };

  const acceptAll = () => persist({ necessary: true, preferences: true, analytics: true, externalMedia: true });
  const rejectOptional = () => persist(defaultCookiePreferences);

  const saveDraft = () => {
    persist({ ...draft, necessary: true });
    setDialogView(null);
  };

  const toggle = (key: "preferences" | "analytics" | "externalMedia") => {
    setDraft((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <>
      <aside className="cookie-branch" aria-label={content.cookies.dialogTitle}>
        <span className="branch-line" aria-hidden="true"><Leaf /></span>
        <button
          ref={triggerRef}
          type="button"
          className="branch-action branch-settings"
          aria-label={content.cookies.branchSettings}
          title={content.cookies.branchSettings}
          onClick={() => setDialogView("preferences")}
        >
          <Cookie aria-hidden="true" />
        </button>
      </aside>

      {!decided && (
        <section className="cookie-banner" aria-labelledby="cookie-banner-title">
          <div>
            <h2 id="cookie-banner-title">{content.cookies.bannerTitle}</h2>
            <p>{content.cookies.bannerText}</p>
          </div>
          <div className="cookie-banner-actions">
            <button type="button" className="button button-primary" onClick={acceptAll}>{content.cookies.accept}</button>
            <button type="button" className="button button-secondary" onClick={rejectOptional}>{content.cookies.reject}</button>
            <button type="button" className="text-button" onClick={() => setDialogView("preferences")}>{content.cookies.configure}</button>
          </div>
        </section>
      )}

      {dialogView && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setDialogView(null);
        }}>
          <section
            ref={dialogRef}
            className="cookie-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-dialog-title"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="dialog-close"
              aria-label={content.cookies.close}
              onClick={() => setDialogView(null)}
            >
              <X aria-hidden="true" />
            </button>

            {dialogView === "preferences" ? (
              <>
                <p className="eyebrow">Arrels</p>
                <h2 id="cookie-dialog-title">{content.cookies.dialogTitle}</h2>
                <p>{content.cookies.dialogIntro}</p>
                <div className="cookie-options">
                  <div className="cookie-option">
                    <div><h3>{content.cookies.necessary}</h3><p>{content.cookies.necessaryDescription}</p></div>
                    <span className="always-active">{content.cookies.alwaysActive}</span>
                  </div>
                  <CookieToggle
                    label={content.cookies.preferences}
                    description={content.cookies.preferencesDescription}
                    checked={draft.preferences}
                    onChange={() => toggle("preferences")}
                  />
                  <CookieToggle
                    label={content.cookies.analytics}
                    description={content.cookies.analyticsDescription}
                    checked={draft.analytics}
                    onChange={() => toggle("analytics")}
                  />
                  <CookieToggle
                    label={content.cookies.external}
                    description={content.cookies.externalDescription}
                    checked={draft.externalMedia}
                    onChange={() => toggle("externalMedia")}
                  />
                </div>
                <div className="dialog-actions">
                  <button type="button" className="button button-primary" onClick={saveDraft}>{content.cookies.save}</button>
                  <button type="button" className="text-button" onClick={() => setDialogView("policy")}>{content.cookies.policyTitle}</button>
                </div>
              </>
            ) : (
              <article className="cookie-policy">
                <p className="eyebrow">Arrels</p>
                <h2 id="cookie-dialog-title">{content.cookies.policyTitle}</h2>
                <p>{content.cookies.policyIntro}</p>
                <h3>{content.cookies.policyUseTitle}</h3>
                <p>{content.cookies.policyUse}</p>
                <h3>{content.cookies.policyControlTitle}</h3>
                <p>{content.cookies.policyControl}</p>
                <h3>{content.cookies.policyRetentionTitle}</h3>
                <p>{content.cookies.policyRetention}</p>
                <button type="button" className="button button-secondary" onClick={() => setDialogView("preferences")}>{content.cookies.backToSettings}</button>
              </article>
            )}
          </section>
        </div>
      )}
    </>
  );
}

function CookieToggle({ label, description, checked, onChange }: { label: string; description: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="cookie-option cookie-option-toggle">
      <span><strong>{label}</strong><small>{description}</small></span>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="switch" aria-hidden="true" />
    </label>
  );
}
