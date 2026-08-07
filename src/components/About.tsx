import { useApp } from '../context/AppContext';
import { i18n, PROFILE } from '../data/i18n';

export default function About() {
  const { lang } = useApp();
  const t = i18n[lang];

  return (
    <section id="sobre-mi" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 font-mono text-sm text-[var(--primary)]">{t.sec[0]}</p>
          <h2 className="font-display text-4xl font-bold tracking-tight">{t.sobre.titulo}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* ¿Quién soy? */}
          <div className="card p-8 transition-all hover:-translate-y-1 hover:border-[var(--primary)]">
            <h3 className="font-display mb-4 text-xl font-semibold">{t.sobre.q1}</h3>
            <p
              className="mb-4 text-[var(--text-muted)]"
              dangerouslySetInnerHTML={{ __html: t.sobre.p1 }}
            />
            <p className="mb-4 text-[var(--text-muted)]">{t.sobre.p2}</p>
            <p className="text-[var(--text-muted)]">{t.sobre.p3}</p>
          </div>

          {/* ¿Qué hago? */}
          <div className="card p-8 transition-all hover:-translate-y-1 hover:border-[var(--primary)]">
            <h3 className="font-display mb-4 text-xl font-semibold">{t.sobre.q2}</h3>
            <ul className="mb-6 space-y-2.5">
              {t.sobre.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                  <span className="mt-0.5 shrink-0 font-bold text-[var(--success)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface-900)] px-3.5 py-1.5 text-xs text-[var(--text-muted)]">{PROFILE.location}</span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface-900)] px-3.5 py-1.5 text-xs text-[var(--text-muted)]">🎓 ESPE</span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface-900)] px-3.5 py-1.5 text-xs text-[var(--text-muted)]">💻 Full Stack</span>
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface-900)] px-3.5 py-1.5 text-xs text-[var(--text-muted)]">💼 +3 años exp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
