import { useEffect, useState } from "react";
import { AmbientParticles } from "./components/AmbientParticles";
import { Header } from "./components/Header";
import {
  CookieCenter,
  readCookiePreferences,
  type CookiePreferences,
} from "./components/cookies/CookieCenter";
import {
  Contact,
  Dream,
  Footer,
  Hero,
  Lab,
  MonthlyPuzzle,
  Team,
  Universe,
  Vision,
} from "./components/Sections";
import { copy, type Language } from "./content";

const LANGUAGE_KEY = "arrels-language";

function detectLanguage(rememberPreference: boolean): Language {
  if (rememberPreference) {
    try {
      const stored = window.localStorage.getItem(LANGUAGE_KEY);
      if (stored === "ca" || stored === "es" || stored === "en") return stored;
    } catch {
      // Fall back to browser language when storage is blocked.
    }
  }
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("ca")) return "ca";
  if (browserLanguage.startsWith("en")) return "en";
  return "es";
}

export default function App() {
  const [consent, setConsent] = useState(readCookiePreferences);
  const [language, setLanguage] = useState<Language>(() => detectLanguage(consent.preferences.preferences));
  const [openSettingsSignal, setOpenSettingsSignal] = useState(0);
  const [openPolicySignal, setOpenPolicySignal] = useState(0);
  const content = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", content.meta.description);

    try {
      if (consent.preferences.preferences) window.localStorage.setItem(LANGUAGE_KEY, language);
      else window.localStorage.removeItem(LANGUAGE_KEY);
    } catch {
      // Language remains active for the current session.
    }
  }, [consent.preferences.preferences, content.meta.description, content.meta.title, language]);

  const updateConsent = (preferences: CookiePreferences) => {
    setConsent({ preferences, decided: true });
  };

  const openCookieSettings = () => setOpenSettingsSignal((value) => value + 1);
  const openCookiePolicy = () => setOpenPolicySignal((value) => value + 1);

  return (
    <>
      <a className="skip-link" href="#main-content">{content.accessibility.skip}</a>
      <Header language={language} onLanguageChange={setLanguage} content={content} />
      <AmbientParticles />
      <main id="main-content">
        <Hero content={content} />
        <Vision content={content} />
        <Dream content={content} />
        <Universe content={content} />
        <MonthlyPuzzle
          content={content}
          externalMediaAllowed={consent.preferences.externalMedia}
          onOpenCookieSettings={openCookieSettings}
        />
        <Lab content={content} />
        <Team content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} onOpenCookieSettings={openCookieSettings} onOpenCookiePolicy={openCookiePolicy} />
      <CookieCenter
        content={content}
        preferences={consent.preferences}
        decided={consent.decided}
        onChange={updateConsent}
        openSettingsSignal={openSettingsSignal}
        openPolicySignal={openPolicySignal}
      />
    </>
  );
}
