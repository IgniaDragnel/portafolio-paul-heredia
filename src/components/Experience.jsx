import { useApp } from '../context/AppContext';
import { i18n, tagIcon } from '../data/i18n';

function Tag({ name }) {
  const icon = tagIcon(name);
  if (icon.img) {
    return (
      <span title={icon.label} className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-900)]">
        <img src={icon.img} alt={icon.label} loading="lazy" className="h-4 w-4" />
      </span>
    );
  }
  if (icon.emoji) {
    return (
      <span title={icon.label} className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-900)] text-sm">
        {icon.emoji}
      </span>
    );
  }
  return (
    <span className="rounded-md border border-[var(--border)] bg-[var(--surface-900)] px-2 py-1 font-mono text-[11px] text-[var(--text-muted)]">
      {icon.label}
    </span>
  );
}

export default function Experience() {
  const { lang } = useApp();
  const t = i18n[lang];

  return (
    <section id="experiencia" className="py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 font-mono text-sm text-[var(--primary)]">{t.sec[1]}</p>
          <h2 className="font-display text-4xl font-bold tracking-tight">{t.exp.titulo}</h2>
        </div>

        <div className="relative border-l-2 border-[var(--border)] pl-8">
          {t.exp.items.map((job) => (
            <div key={job.company} className="group relative mb-8 last:mb-0">
              {/* Punto de la línea */}
              <span className="absolute -left-[41px] top-8 h-3.5 w-3.5 rounded-full border-[3px] border-[var(--primary)] bg-[var(--background)] shadow-[var(--shadow-glow)] transition-transform group-hover:scale-125" />

              <div className="card p-7 transition-all group-hover:-translate-y-1 group-hover:border-[var(--primary)]">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                    <p className="text-sm font-medium text-[var(--primary)]">{job.company}</p>
                  </div>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface-900)] px-3.5 py-1 font-mono text-xs text-[var(--text-muted)] whitespace-nowrap">
                    {job.date}
                  </span>
                </div>

                <ul className="mb-5 space-y-2">
                  {job.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                      <span className="mt-0.5 shrink-0 font-bold text-[var(--success)]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <Tag key={tag} name={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
