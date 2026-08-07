import { useApp } from '../context/AppContext';
import { i18n } from '../data/i18n';

export default function Footer() {
  const { lang } = useApp();
  const t = i18n[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-900)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="font-mono text-sm text-[var(--text-muted)]">
          <span className="text-[var(--success)]">➜</span> {t.foot.msg}
        </p>
        <p className="text-sm text-[var(--text-dim)]">
          © {year} Paul Heredia · {t.foot.copy}
        </p>
      </div>
    </footer>
  );
}
