import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Clock, BarChart3, Calendar } from 'lucide-react';
import { procedureByRoute, procedures } from '@/data/procedures';
import { departments } from '@/data/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Step } from '@/components/documentation/Step';
import { Callout } from '@/components/documentation/Callout';
import { Checklist } from '@/components/documentation/Checklist';
import { TableOfContents } from '@/components/documentation/TableOfContents';
import { procedureById } from '@/data/procedures';

export default function ProcedurePage() {
  const { department, slug } = useParams();
  const procedure = department && slug ? procedureByRoute(department, slug) : undefined;

  useEffect(() => {
    if (!procedure) return;
    try {
      const raw = localStorage.getItem('recentProcedures');
      const list: string[] = raw ? JSON.parse(raw) : [];
      const next = [procedure.id, ...list.filter((x) => x !== procedure.id)].slice(0, 6);
      localStorage.setItem('recentProcedures', JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, [procedure?.id]);

  if (!procedure) return <Navigate to="/404" replace />;

  const dept = departments.find((d) => d.id === procedure.department);
  const idx = procedures.findIndex((p) => p.id === procedure.id);
  const prev = idx > 0 ? procedures[idx - 1] : null;
  const next = idx < procedures.length - 1 ? procedures[idx + 1] : null;

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: dept?.label || procedure.department, to: `/${procedure.department}` },
    { label: procedure.title },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
      <article className="min-w-0">
        <Breadcrumbs items={crumbs} />

        <header className="mt-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary">{dept?.label}</Badge>
            {procedure.estimatedDuration && (
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {procedure.estimatedDuration}</span>
            )}
            {procedure.difficulty && (
              <span className="flex items-center gap-1"><BarChart3 className="h-3.5 w-3.5" /> {procedure.difficulty}</span>
            )}
            {procedure.lastUpdated && (
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Updated {procedure.lastUpdated}</span>
            )}
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{procedure.title}</h1>
          <p className="mt-2 text-base text-muted-foreground">{procedure.description}</p>
          {procedure.relatedProcedures && procedure.relatedProcedures.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">Related:</span>
              {procedure.relatedProcedures.map((id) => {
                const rp = procedureById(id);
                if (!rp) return null;
                return (
                  <Link
                    key={id}
                    to={`/${rp.department}/${rp.slug}`}
                    className="text-primary hover:underline"
                  >
                    {rp.title}
                  </Link>
                );
              })}
            </div>
          )}
        </header>

        <Separator className="my-6" />

        {procedure.introduction && (
          <section className="prose-like">
            <h2 className="text-lg font-semibold">Introduction</h2>
            <p className="mt-2 leading-relaxed text-foreground/90">{procedure.introduction}</p>
          </section>
        )}

        {procedure.prerequisites && procedure.prerequisites.length > 0 && (
          <section className="mt-6">
            <h2 className="text-lg font-semibold">Prerequisites</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/90">
              {procedure.prerequisites.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-6">
          <h2 className="text-lg font-semibold">Step-by-Step Instructions</h2>
          <div className="mt-4 space-y-8">
            {procedure.steps.map((s, i) => (
              <Step key={i} index={i} step={s} />
            ))}
          </div>
        </section>

        {procedure.notes && procedure.notes.length > 0 && (
          <section className="mt-6">
            <h2 className="text-lg font-semibold">Important Notes</h2>
            <div className="mt-2 space-y-2">
              {procedure.notes.map((n, i) => (
                <Callout key={i} type="info" content={n} />
              ))}
            </div>
          </section>
        )}

        {procedure.commonMistakes && procedure.commonMistakes.length > 0 && (
          <section className="mt-6">
            <h2 className="text-lg font-semibold">Common Mistakes</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/90">
              {procedure.commonMistakes.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </section>
        )}

        {procedure.troubleshooting && procedure.troubleshooting.length > 0 && (
          <section className="mt-6">
            <h2 className="text-lg font-semibold">Troubleshooting</h2>
            <div className="mt-2 space-y-3">
              {procedure.troubleshooting.map((t, i) => (
                <div key={i} className="rounded-lg border p-3">
                  <p className="font-medium">{t.problem}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.solution}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {procedure.checklist && procedure.checklist.length > 0 && (
          <section className="mt-6" id="checklist">
            <Checklist procedureId={procedure.id} items={procedure.checklist} />
          </section>
        )}

        <Separator className="my-8" />

        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <Button variant="outline" asChild>
              <Link to={`/${prev.department}/${prev.slug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" /> {prev.title}
              </Link>
            </Button>
          ) : (
            <span />
          )}
          {next ? (
            <Button variant="outline" asChild>
              <Link to={`/${next.department}/${next.slug}`}>
                {next.title} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <span />
          )}
        </div>
      </article>

      <aside className="hidden lg:block">
        <div className="sticky top-20">
          <TableOfContents procedure={procedure} />
        </div>
      </aside>
    </div>
  );
}
