import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useApp } from '../context/AppContext';
import { i18n, CONTACT } from '../data/i18n';

const ICONS: Record<string, string> = {
  whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  email: 'M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67ZM22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z',
  pin: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z'
};

interface ContactCard {
  icon: string;
  title: string;
  text: string;
  href?: string;
  external?: boolean;
  static?: boolean;
  copy?: boolean;
}

export default function Contact() {
  const { lang } = useApp();
  const t = i18n[lang];
  const [toast, setToast] = useState('');
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cards: ContactCard[] = [
    { icon: 'whatsapp', title: t.cont.whatsapp, text: CONTACT.whatsappLabel, href: CONTACT.whatsapp, external: true },
    { icon: 'github', title: t.cont.website, text: 'github.com/IgniaDragnel', href: CONTACT.githubRepos, external: true },
    { icon: 'linkedin', title: t.cont.linkedin, text: CONTACT.linkedinLabel, href: CONTACT.linkedin, external: true },
    { icon: 'email', title: t.cont.email, text: CONTACT.email, href: CONTACT.emailCompose, external: true, copy: true },
    { icon: 'pin', title: t.cont.ubic, text: 'Quito, Ecuador', static: true }
  ];

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2600);
  };

  const handleEmail = (_e: MouseEvent<HTMLAnchorElement>) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(CONTACT.email).then(
        () => showToast(t.cont.copied),
        () => showToast(CONTACT.email)
      );
    }
  };

  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 font-mono text-sm text-[var(--primary)]">{t.sec[4]}</p>
          <h2 className="font-display text-4xl font-bold tracking-tight">{t.cont.titulo}</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--text-muted)]">{t.cont.sub}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cards.map((c) =>
            c.static ? (
              <div key={c.title} className="card cursor-default p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--primary)]">
                <div className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-xl border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.08)] text-[var(--primary)]">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d={ICONS[c.icon] ?? ''} />
                  </svg>
                </div>
                <h3 className="font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-1 break-all font-mono text-xs text-[var(--text-muted)]">{c.text}</p>
              </div>
            ) : (
              <a
                key={c.title}
                href={c.href}
                onClick={c.copy ? handleEmail : undefined}
                target={c.external ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-xl border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.08)] text-[var(--primary)]">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d={ICONS[c.icon] ?? ''} />
                  </svg>
                </div>
                <h3 className="font-display text-base font-semibold text-[var(--text)]">{c.title}</h3>
                <p className="mt-1 break-all font-mono text-xs text-[var(--text-muted)]">{c.text}</p>
              </a>
            )
          )}
        </div>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-8 left-1/2 z-[110] flex -translate-x-1/2 items-center gap-2 rounded-lg border border-[rgba(52,211,153,0.45)] bg-[var(--surface-800)] px-5 py-3 font-mono text-sm text-[var(--success)] shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-300 ${
          toast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </section>
  );
}
