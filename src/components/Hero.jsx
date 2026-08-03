import { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { i18n, CONTACT, PROFILE } from '../data/i18n';

const SOCIALS = [
  { label: 'GitHub', href: CONTACT.github, d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
  { label: 'WhatsApp', href: CONTACT.whatsapp, d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
  { label: 'Correo', href: CONTACT.emailCompose, d: 'M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' + 'M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' },
  { label: 'LinkedIn', href: CONTACT.linkedin, d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' }
];

export default function Hero() {
  const { lang } = useApp();
  const t = i18n[lang];
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const [photoSrc, setPhotoSrc] = useState(CONTACT.photo);

  // Efecto máquina de escribir
  useEffect(() => {
    const roles = t.hero.roles;
    let timer;

    const tick = () => {
      const current = roles[roleIndex.current];
      if (!deleting) {
        charIndex.current += 1;
        setTyped(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          setDeleting(true);
          timer = setTimeout(tick, 2000);
        } else {
          timer = setTimeout(tick, 75);
        }
      } else {
        charIndex.current -= 1;
        setTyped(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          setDeleting(false);
          roleIndex.current = (roleIndex.current + 1) % roles.length;
          timer = setTimeout(tick, 350);
        } else {
          timer = setTimeout(tick, 40);
        }
      }
    };

    // Reiniciar al cambiar idioma
    roleIndex.current = 0;
    charIndex.current = 0;
    setDeleting(false);
    setTyped('');
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [lang, deleting]);

  const copyEmail = (e) => {
    // No bloquear el enlace (abre Gmail), copiar como respaldo
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(CONTACT.email).catch(() => {});
    }
  };

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Texto */}
        <div className="text-center lg:text-left">
          <p className="mb-4 font-mono text-sm text-[var(--primary)]">{t.hero.greeting}</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="gradient-text">{'Paul Heredia'}</span>
          </h1>
          <h2 className="mt-3 min-h-[1.8em] font-mono text-lg text-[var(--text-muted)]">
            {t.hero.role} <span className="text-[var(--text)]">{typed}</span>
            <span className="animate-blink text-[var(--primary)]">_</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)] lg:mx-0">{t.hero.desc}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-800)] px-4 py-1.5 font-mono text-sm text-[var(--text-muted)]">
            📍 {PROFILE.location.replace('📍 ', '')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#proyectos"
              className="rounded-lg bg-[var(--primary)] px-6 py-3 font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              {t.hero.btn1}
            </a>
            <a
              href="#contacto"
              className="rounded-lg border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text)] transition-all hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              {t.hero.btn2}
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                onClick={s.label === 'Correo' ? copyEmail : undefined}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Foto + terminal */}
        <div className="flex flex-col items-center gap-8">
          <div className="h-48 w-48 shrink-0 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-1 shadow-[var(--shadow-glow)] md:h-56 md:w-56">
            <img
              src={photoSrc}
              onError={() => photoSrc === CONTACT.photo && setPhotoSrc(CONTACT.photoFallback)}
              alt="Paul Heredia"
              className="h-full w-full rounded-full border-4 border-[var(--background)] object-cover"
            />
          </div>
          <div className="hidden w-full max-w-md overflow-hidden rounded-xl border border-[var(--border)] lg:block" style={{ background: 'var(--terminal-bg)' }}>
            <div className="flex items-center gap-2 border-b border-[#1e2433] px-4 py-3" style={{ background: 'var(--terminal-header)' }}>
              <span className="h-3 w-3 rounded-full bg-[#f87171]" />
              <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
              <span className="h-3 w-3 rounded-full bg-[#34d399]" />
              <span className="ml-2 font-mono text-xs text-[#5f6b85]">paul@portfolio: ~</span>
            </div>
            <div className="px-5 py-4 font-mono text-sm leading-8">
              <p><span className="text-[#34d399]">➜</span> <span className="text-[#e8ecf5]">whoami</span></p>
              <p className="pl-4 text-[#98a2b8]">{t.term.whoami}</p>
              <p><span className="text-[#34d399]">➜</span> <span className="text-[#e8ecf5]">cat lenguajes.txt</span></p>
              <p className="pl-4 text-[#98a2b8]">{'{ PHP, Java, C#, JavaScript, Dart, SQL }'}</p>
              <p><span className="text-[#34d399]">➜</span> <span className="text-[#e8ecf5]">git status</span></p>
              <p className="pl-4 text-[#34d399]">{t.term.status}</p>
              <p><span className="text-[#34d399]">➜</span> <span className="animate-blink text-[var(--primary)]">▊</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
