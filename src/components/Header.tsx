import { Check, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import type { Language, SiteCopy } from "../content";
import { languages } from "../content";

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  content: SiteCopy;
}

interface LanguageSelectorProps {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
}

function LanguageSelector({ language, label, onChange }: LanguageSelectorProps) {
  const [expanded, setExpanded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = languages.find((item) => item.value === language) ?? languages[0];
  const selectedIndex = Math.max(0, languages.findIndex((item) => item.value === language));

  useEffect(() => {
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setExpanded(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, []);

  const openAndFocus = (index: number) => {
    setExpanded(true);
    window.setTimeout(() => optionRefs.current[index]?.focus(), 0);
  };

  const chooseLanguage = (nextLanguage: Language) => {
    onChange(nextLanguage);
    setExpanded(false);
    triggerRef.current?.focus();
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openAndFocus(selectedIndex);
    }
    if (event.key === "Escape") setExpanded(false);
  };

  const handleOptionKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;
    if (event.key === "ArrowDown") nextIndex = (index + 1) % languages.length;
    if (event.key === "ArrowUp") nextIndex = (index - 1 + languages.length) % languages.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = languages.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      optionRefs.current[nextIndex]?.focus();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setExpanded(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <div className="language-selector" ref={rootRef}>
      <button
        className="language-trigger"
        type="button"
        ref={triggerRef}
        data-testid="language-selector"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={expanded}
        aria-controls="language-options"
        onClick={() => setExpanded((value) => !value)}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="language-code" aria-hidden="true">{selected.short}</span>
        <span className="language-label" aria-hidden="true">{selected.label}</span>
        <ChevronDown size={15} strokeWidth={1.7} aria-hidden="true" />
      </button>

      {expanded && (
        <div className="language-options" id="language-options" role="listbox" aria-label={label}>
          {languages.map((item, index) => (
            <button
              className="language-option"
              type="button"
              role="option"
              aria-label={item.label}
              aria-selected={item.value === language}
              key={item.value}
              ref={(element) => { optionRefs.current[index] = element; }}
              onClick={() => chooseLanguage(item.value)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
            >
              <span className="language-option-code" aria-hidden="true">{item.short}</span>
              <span aria-hidden="true">{item.label}</span>
              <Check className="language-check" size={15} strokeWidth={1.8} aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header({ language, onLanguageChange, content }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const links = [
    ["vision", content.nav.vision],
    ["dream", content.nav.dream],
    ["universe", content.nav.universe],
    ["puzzle", content.nav.puzzle],
    ["lab", content.nav.lab],
    ["team", content.nav.team],
    ["contact", content.nav.contact],
  ];

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={close} aria-label={`Arrels — ${content.accessibility.home}`}>
        Arrels
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? content.accessibility.closeMenu : content.accessibility.menu}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div className={`header-panel ${open ? "is-open" : ""}`} id="primary-navigation">
        <nav aria-label={content.accessibility.primaryNav}>
          <ul>
            {links.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={close}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSelector
          language={language}
          label={content.accessibility.language}
          onChange={onLanguageChange}
        />
      </div>
    </header>
  );
}
