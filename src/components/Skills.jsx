import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { i18n } from '../data/i18n';

const CATS = ['todo', 'lenguajes', 'frontend', 'backend', 'movil', 'bases', 'herramientas'];

export default function Skills() {
  const { lang } = useApp();
  const t = i18n[lang];
  const [active, setActive] = useState('todo');

  const list = active === 'todo' ? t.skills : t.skills.filter((s) => s.cat === active);

  return (
    <section id="habilidades" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 font-mono text-sm text-[var(--primary)]">{t.sec[2]}</p>
          <h2 className="font-display text-4xl font-bold tracking-tight">{t.hab.titulo}</h2>
          <p className="mx-auto mt-3 max-w-lg text-[var(--text-muted)]">{t.hab.sub}</p>
        </div>

        {/* Pestañas */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {t.hab.tabs.map((label, i) => (
            <button
              key={label}
              onClick={() => setActive(CATS[i])}
              className={`rounded-full px-5 py-2 font-mono text-sm transition-all ${
                active === CATS[i]
                  ? 'bg-gradient-to-r from-[#10b981] to-[#34d399] font-bold text-[#06251b] shadow-[0_6px_20px_rgba(16,185,129,0.35)]'
                  : 'border border-[var(--border)] bg-[var(--surface-800)] text-[var(--text-muted)] hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--text)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {list.map((skill) => (
            <div
              key={skill.name}
              className="card flex flex-col items-center gap-3.5 px-3 py-6 text-center transition-all hover:-translate-y-1.5 hover:border-[#34d399] hover:shadow-[0_14px_34px_rgba(0,0,0,0.35)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(52,211,153,0.22)] bg-[rgba(52,211,153,0.08)]">
                {skill.img ? (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    loading="lazy"
                    className={`h-9 w-9 object-contain transition-transform hover:scale-110 ${skill.invert ? 'invert' : ''} [data-theme="light"]:invert-0`}
                  />
                ) : (
                  <span className="text-3xl">{skill.emoji}</span>
                )}
              </div>
              <h3 className="font-display text-sm font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
