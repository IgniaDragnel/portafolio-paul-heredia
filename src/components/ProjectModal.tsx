import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { tagIcon } from '../data/i18n';
import type { Project } from '../data/i18n';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [index, setIndex] = useState(0);
  const [landscape, setLandscape] = useState(false);

  const images = project.images || [];
  const multi = images.length > 1;

  const prev = (e: MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e: MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  };

  // Cerrar con Escape y navegar con flechas
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, images.length]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 backdrop-blur-md"
      style={{ background: 'var(--overlay)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="card relative w-full max-w-4xl overflow-hidden" style={{ maxHeight: '86vh' }}>
        <button
          onClick={onClose}
          aria-label="Cerrar detalles"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--glass)] text-[var(--text)] transition-all hover:rotate-90 hover:border-[var(--error)] hover:text-[var(--error)]"
        >
          ✕
        </button>

        <div className={landscape ? 'flex max-h-[86vh] flex-col' : 'flex flex-col md:flex-row'}>
          {/* Media con galería */}
          <div className={landscape ? 'relative bg-[var(--surface-900)] p-2' : 'relative flex-1 bg-[var(--surface-900)] p-2 md:w-1/2'}>
            <img
              key={images[index]}
              src={images[index]}
              alt={`${project.title} — ${index + 1}`}
              onLoad={(e) => setLandscape(e.currentTarget.naturalWidth > e.currentTarget.naturalHeight)}
              className={
                landscape
                  ? 'h-auto max-h-[42vh] w-full rounded-lg object-contain'
                  : 'h-auto max-h-[50vh] w-full rounded-lg object-contain md:max-h-[78vh]'
              }
            />
            {multi && (
              <>
                <button
                  onClick={prev}
                  aria-label="Imagen anterior"
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--glass)] text-xl text-[var(--text)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  aria-label="Siguiente imagen"
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--glass)] text-xl text-[var(--text)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  ›
                </button>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--glass)] px-3.5 py-1 font-mono text-xs text-[var(--text)]">
                  {index + 1} / {images.length}
                </span>
              </>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código en GitHub"
              title="Ver código en GitHub"
              className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--glass)] text-[var(--text)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>

          {/* Detalles */}
          <div className={landscape ? 'min-h-0 flex-1 overflow-y-auto p-7' : 'flex-1 overflow-y-auto p-7 md:w-1/2 md:max-h-[86vh]'}>
            <div className="mb-3 flex flex-wrap gap-1.5">
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
            <h3 className="font-display mb-3 text-2xl font-bold">{project.title}</h3>
            <p className="mb-4 text-sm text-[var(--text-muted)]">{project.desc}</p>
            <ul className="mb-2 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                  <span className="mt-0.5 shrink-0 font-bold text-[var(--success)]">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
