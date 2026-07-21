import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { SiteCopy } from "../content";

interface ContactFormProps {
  content: SiteCopy;
}

type FormStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm({ content }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    if (data.get("company")) return;

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
    const email = import.meta.env.VITE_CONTACT_EMAIL?.trim() || "hello@arrels.studio";
    setStatus("sending");

    if (!endpoint) {
      const subject = encodeURIComponent(`Arrels — ${String(data.get("name"))}`);
      const body = encodeURIComponent(`${String(data.get("message"))}\n\n${String(data.get("name"))}\n${String(data.get("email"))}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error(`Contact endpoint returned ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="form-field">
        <label htmlFor="contact-name">{content.contact.name} <span aria-hidden="true">*</span></label>
        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder={content.contact.nameHint} required aria-errormessage="contact-required" />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">{content.contact.email} <span aria-hidden="true">*</span></label>
        <input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder={content.contact.emailHint} required aria-errormessage="contact-required" />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">{content.contact.message} <span aria-hidden="true">*</span></label>
        <textarea id="contact-message" name="message" rows={6} placeholder={content.contact.messageHint} required aria-errormessage="contact-required" />
      </div>
      <div className="honeypot" aria-hidden="true">
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>
      <span id="contact-required" className="sr-only">{content.contact.required}</span>
      <button className="button button-primary contact-submit" type="submit" disabled={status === "sending"}>
        <Send aria-hidden="true" />
        {status === "sending" ? content.contact.sending : content.contact.submit}
      </button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">
        {status === "sent" && content.contact.sent}
        {status === "error" && content.contact.error}
      </p>
    </form>
  );
}
