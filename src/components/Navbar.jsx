import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { i18n } from '../data/i18n';

const links = ['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'proyectos', 'contacto'];

export default function Navbar() {
  const { lang, theme, menuOpen, setMenuOpen, toggleTheme, toggleLang } = useApp();
  const t = i18n[lang];

  // Cerrar menú al hacer click en un enlace
  useEffect(() => {
    const onResize = () => window.innerWidth > 768 && setMenuOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [setMenuOpen]);

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] transition-colors">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4">
        <a href="#inicio" className="font-mono text-xl font-semibold tracking-wide hover:text-[var(--primary)]">
          &lt;PH /&gt;
        </a>

        {/* Enlaces escritorio */}
        <div className="hidden items-center gap-7 md:flex">
          {t.nav.map((label, i) => (
            <a
              key={label}
              href={`#${links[i]}`}
              className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/IgniaDragnel"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:brightness-110"
          >
            GitHub
          </a>
        </div>

        {/* Controles */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            title="Cambiar tema"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-800)] text-lg transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            onClick={toggleLang}
            aria-label="Cambiar idioma"
            title="Cambiar idioma"
            className="flex h-10 w-12 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-800)] font-mono text-xs font-bold tracking-wide transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          {/* Hamburguesa móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="flex flex-col gap-1.5 p-1.5 md:hidden"
          >
            <span className={`h-0.5 w-6 rounded bg-[var(--text)] transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 rounded bg-[var(--text)] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 rounded bg-[var(--text)] transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`glass md:hidden fixed right-0 top-[72px] flex h-[calc(100vh-72px)] w-[min(320px,85vw)] flex-col items-center gap-6 border-l border-[var(--border)] py-12 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {t.nav.map((label, i) => (
          <a
            key={label}
            href={`#${links[i]}`}
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            {label}
          </a>
        ))}
        <a
          href="https://github.com/IgniaDragnel"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[var(--primary)] px-5 py-2.5 font-semibold text-white"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
