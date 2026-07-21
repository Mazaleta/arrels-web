import {
  BookOpen,
  Clock3,
  CodeXml,
  Compass,
  FlaskConical,
  Gamepad2,
  Headphones,
  Lightbulb,
  Monitor,
  Palette,
  Play,
  Puzzle,
  Sparkles,
  Sprout,
  Trophy,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { SiteCopy } from "../content";
import { ContactForm } from "./ContactForm";
import { GameEmbed } from "./GameEmbed";

interface ContentProps { content: SiteCopy }

export function Hero({ content }: ContentProps) {
  return (
    <section className="hero" id="home" aria-label="Arrels">
      <img className="hero-image" src="/images/hero-world.webp" alt={content.hero.imageAlt} fetchPriority="high" />
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-content section-shell">
        <p className="hero-kicker">{content.hero.kicker}</p>
        <h1>Arrels</h1>
        <p className="hero-intro">{content.hero.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#dream">{content.hero.primary}</a>
          <a className="button button-glass" href="#puzzle">{content.hero.secondary}</a>
        </div>
      </div>
      <a className="scroll-cue" href="#vision" aria-label={content.accessibility.scroll}><span aria-hidden="true" /></a>
    </section>
  );
}

export function Vision({ content }: ContentProps) {
  const icons = [Sprout, Puzzle, Sparkles];
  return (
    <section className="page-section vision-section" id="vision">
      <div className="section-shell narrow-shell">
        <h2 className="vision-quote">“{content.vision.quote}”</h2>
        <div className="vision-grid">
          {content.vision.features.map((feature, index) => (
            <FeatureCard key={feature.title} icon={icons[index]} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Dream({ content }: ContentProps) {
  const icons = [Monitor, Compass, BookOpen, Wind];
  return (
    <section className="page-section" id="dream">
      <div className="section-shell">
        <SectionHeading eyebrow={content.dream.eyebrow} title="El Sueño" subtitle={content.dream.subtitle} />
        <figure className="media-card dream-image">
          <img src="/images/dream-greenhouse.webp" alt={content.dream.imageAlt} width="1672" height="941" loading="lazy" />
        </figure>
        <div className="trailer-card" aria-label={content.dream.trailer}>
          <span className="play-orb" aria-hidden="true"><Play /></span>
          <p>{content.dream.trailer}</p>
        </div>
        <div className="trait-grid">
          {content.dream.traits.map((feature, index) => (
            <FeatureCard key={feature.title} icon={icons[index]} {...feature} compact />
          ))}
        </div>
        <div className="centered-actions">
          <ExternalCta href={import.meta.env.VITE_STEAM_URL} label={content.dream.steam} unavailable={content.dream.unavailable} primary />
          <ExternalCta href={import.meta.env.VITE_DEVELOPMENT_URL} label={content.dream.development} unavailable={content.dream.unavailable} />
        </div>
      </div>
    </section>
  );
}

export function Universe({ content }: ContentProps) {
  return (
    <section className="page-section universe-section" id="universe">
      <div className="section-shell narrow-shell">
        <SectionHeading eyebrow={content.universe.eyebrow} title={content.universe.title} subtitle={content.universe.subtitle} />
        <figure className="universe-image">
          <img src="/images/universe-tree.webp" alt={content.universe.imageAlt} width="1536" height="1024" loading="lazy" />
        </figure>
        <div className="timeline" aria-label={content.universe.title}>
          <article className="timeline-item is-current">
            <span className="timeline-dot" aria-hidden="true" />
            <h3>{content.universe.current}</h3>
            <p>{content.universe.currentDetail}</p>
          </article>
          {[1, 2].map((seed) => (
            <article className="timeline-item is-seed" key={seed}>
              <span className="timeline-dot" aria-hidden="true" />
              <h3>{content.universe.seed}</h3>
              <p>{content.universe.seedDetail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface PuzzleSectionProps extends ContentProps {
  externalMediaAllowed: boolean;
  onOpenCookieSettings: () => void;
}

export function MonthlyPuzzle({ content, externalMediaAllowed, onOpenCookieSettings }: PuzzleSectionProps) {
  const countdown = useMonthlyCountdown();
  return (
    <section className="page-section puzzle-section" id="puzzle">
      <div className="section-shell narrow-shell">
        <SectionHeading eyebrow={content.puzzle.eyebrow} title={content.puzzle.title} subtitle={content.puzzle.subtitle} />
        <figure className="media-card puzzle-image">
          <img src="/images/monthly-puzzle-lab.webp" alt={content.puzzle.imageAlt} width="1635" height="962" loading="lazy" />
          <a className="puzzle-play" href="#game-embed"><Play aria-hidden="true" /><span>{content.puzzle.play}</span></a>
        </figure>
        <div className="countdown" aria-label={content.puzzle.next}>
          <TimeUnit value={countdown.days} label={content.puzzle.days} />
          <TimeUnit value={countdown.hours} label={content.puzzle.hours} />
          <TimeUnit value={countdown.minutes} label={content.puzzle.minutes} />
        </div>
        <p className="countdown-label">{content.puzzle.next}</p>
        <div className="puzzle-stats">
          <Stat icon={Users} value="142" label={content.puzzle.players} />
          <Stat icon={Trophy} value="38" label={content.puzzle.completed} />
          <Stat icon={Clock3} value="12m" label={content.puzzle.bestTime} />
        </div>
        <GameEmbed content={content} externalMediaAllowed={externalMediaAllowed} onOpenCookieSettings={onOpenCookieSettings} />
      </div>
    </section>
  );
}

export function Lab({ content }: ContentProps) {
  const icons = [Gamepad2, Headphones, FlaskConical, Lightbulb, Sparkles, CodeXml];
  return (
    <section className="page-section lab-section" id="lab">
      <div className="section-shell">
        <SectionHeading eyebrow={content.lab.eyebrow} title={content.lab.title} subtitle={content.lab.intro} />
        <div className="lab-grid">
          {content.lab.features.map((feature, index) => (
            <article className="lab-card" key={feature.title}>
              {(() => { const Icon = icons[index]; return <Icon aria-hidden="true" />; })()}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span>{content.lab.comingSoon}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team({ content }: ContentProps) {
  const icons = [Sprout, Puzzle, Palette, Sparkles];
  return (
    <section className="page-section team-section" id="team">
      <div className="section-shell narrow-shell">
        <SectionHeading eyebrow={content.team.eyebrow} title={content.team.title} subtitle={content.team.intro} />
        <ul className="team-values">
          {content.team.values.map((value, index) => {
            const Icon = icons[index];
            return <li key={value}><Icon aria-hidden="true" /><span>{value}</span></li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export function Contact({ content }: ContentProps) {
  return (
    <section className="page-section contact-section" id="contact">
      <div className="section-shell contact-shell">
        <SectionHeading eyebrow={content.contact.eyebrow} title={content.contact.title} subtitle={content.contact.intro} />
        <ContactForm content={content} />
      </div>
    </section>
  );
}

interface FooterProps extends ContentProps {
  onOpenCookieSettings: () => void;
  onOpenCookiePolicy: () => void;
}

export function Footer({ content, onOpenCookieSettings, onOpenCookiePolicy }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div><a className="brand" href="#home">Arrels</a><p>{content.footer.tagline}</p></div>
        <div className="footer-links">
          <button type="button" onClick={onOpenCookiePolicy}>{content.footer.policy}</button>
          <button type="button" onClick={onOpenCookieSettings}>{content.footer.preferences}</button>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Arrels. {content.footer.rights}</p>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return <header className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{subtitle}</p></header>;
}

function FeatureCard({ icon: Icon, title, description, compact = false }: { icon: LucideIcon; title: string; description: string; compact?: boolean }) {
  return (
    <article className={`feature-card ${compact ? "compact" : ""}`}>
      <Icon aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function ExternalCta({ href, label, unavailable, primary = false }: { href?: string; label: string; unavailable: string; primary?: boolean }) {
  if (!href?.trim()) return <button type="button" className={`button ${primary ? "button-gold" : "button-secondary"}`} disabled title={unavailable}>{label}</button>;
  return <a className={`button ${primary ? "button-gold" : "button-secondary"}`} href={href} target="_blank" rel="noreferrer">{label}</a>;
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return <span><strong>{String(value).padStart(2, "0")}</strong><small>{label}</small></span>;
}

function Stat({ icon: Icon, value, label }: { icon: LucideIcon; value: string; label: string }) {
  return <article><Icon aria-hidden="true" /><strong>{value}</strong><span>{label}</span></article>;
}

function useMonthlyCountdown() {
  const calculate = () => {
    const now = new Date();
    const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const difference = Math.max(0, next.getTime() - now.getTime());
    return {
      days: Math.floor(difference / 86_400_000),
      hours: Math.floor((difference / 3_600_000) % 24),
      minutes: Math.floor((difference / 60_000) % 60),
    };
  };
  const [remaining, setRemaining] = useState(calculate);
  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(calculate()), 60_000);
    return () => window.clearInterval(timer);
  }, []);
  return remaining;
}
