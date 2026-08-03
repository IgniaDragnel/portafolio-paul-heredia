import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { i18n, tagIcon } from '../data/i18n';
import ProjectModal from './ProjectModal';

function ProjectCard({ project, onOpen, t }) {
  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${t.proy.verDetalles}: ${project.title}`}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(project);
        }
      }}
      className="card group cursor-pointer overflow-hidden transition-all hover:-translate-y-1.5 hover:border-[var(--primary)] hover:shadow-[0_16px_38px_rgba(0,0,0,0.4)]"
    >
      <div className="relative h-[210px] overflow-hidden bg-[var(--surface-900)]">
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--overlay)] opacity-0 transition-opacity group-hover:opacity-100">
          <span className="rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-4 py-2 font-mono text-sm font-semibold text-white">
            {t.proy.verDetalles}
          </span>
        </div>
      </div>
      <div className="flex flex-col p-6">
        <h3 className="font-display mb-1.5 text-lg font-semibold">{project.title}</h3>
        <p className="mb-4 text-sm text-[var(--text-muted)]">{project.short}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((tag) => {
            const icon = tagIcon(tag);
            return icon.img ? (
              <span key={tag} title={tag} className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-900)]">
                <img src={icon.img} alt={tag} className="h-4 w-4" />
              </span>
            ) : (
              <span key={tag} title={tag} className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-900)] text-sm">
                {icon.emoji}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { lang } = useApp();
  const t = i18n[lang];
  const [selected, setSelected] = useState(null);

  return (
    <section id="proyectos" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 font-mono text-sm text-[var(--primary)]">{t.sec[3]}</p>
          <h2 className="font-display text-4xl font-bold tracking-tight">{t.proy.titulo}</h2>
          <p className="mx-auto mt-3 max-w-lg text-[var(--text-muted)]">
            {t.proy.sub}{' '}
            <a href="https://github.com/IgniaDragnel?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelected} t={t} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/IgniaDragnel?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text)] transition-all hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            {t.proy.ver}
          </a>
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
