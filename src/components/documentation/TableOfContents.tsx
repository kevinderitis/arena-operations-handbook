import { useEffect, useState } from 'react';
import type { Procedure } from '@/types/documentation';

export function TableOfContents({ procedure }: { procedure: Procedure }) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    procedure.steps.forEach((_, i) => {
      const el = document.getElementById(`step-${i + 1}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [procedure]);

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">On this page</p>
      <ul className="space-y-1 text-sm">
        {procedure.steps.map((s, i) => {
          const id = `step-${i + 1}`;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={
                  active === id
                    ? 'block rounded-md bg-primary/10 px-2 py-1 text-primary'
                    : 'block rounded-md px-2 py-1 text-muted-foreground hover:bg-accent hover:text-foreground'
                }
              >
                {i + 1}. {s.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
