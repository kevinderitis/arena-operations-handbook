import { bedlinkProcedures } from '../content/bedlink';
import { spinalProcedures } from '../content/spinal';
import { frontDeskProcedures } from '../content/front-desk';
import { cleaningProcedures } from '../content/cleaning';
import { inmigrationProcedures } from '../content/inmigration';
import type { Procedure } from '../types/documentation';

export const procedures: Procedure[] = [
  ...bedlinkProcedures,
  ...spinalProcedures,
  ...frontDeskProcedures,
  ...cleaningProcedures,
  ...inmigrationProcedures,
];

export const procedureById = (id: string) => procedures.find((p) => p.id === id);
export const procedureByRoute = (department: string, slug: string) =>
  procedures.find((p) => p.department === department && p.slug === slug);

export function searchProcedures(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return procedures
    .map((p) => {
      const haystack = [
        p.title,
        p.description,
        p.department,
        ...(p.keywords || []),
        p.introduction || '',
        ...(p.steps || []).flatMap((s) => [s.title, s.description || '', ...(s.substeps || [])]),
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(q)) return null;
      // find matching snippet
      const idx = haystack.indexOf(q);
      const start = Math.max(0, idx - 40);
      const snippet = haystack.slice(start, start + 120).replace(/\s+/g, ' ').trim();
      return { procedure: p, snippet };
    })
    .filter(Boolean) as { procedure: Procedure; snippet: string }[];
}
