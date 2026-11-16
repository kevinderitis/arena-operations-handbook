import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock } from 'lucide-react';
import { departments } from '@/data/navigation';
import { procedures, procedureById } from '@/data/procedures';
import { useSearch } from '@/components/search/SearchContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const dailyShortcuts = [
  'spinal-daily-checkins-checkouts',
  'fd-guest-check-in',
  'fd-guest-check-out',
  'cl-morning-preparation',
  'spinal-importing-reservations',
];

export default function HomePage() {
  const { setOpen } = useSearch();
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('recentProcedures');
      if (raw) setRecent(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const recentProcs = recent
    .map((id) => procedureById(id))
    .filter(Boolean) as typeof procedures;

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Arena Operations Handbook</h1>
        <p className="mt-1 text-muted-foreground">
          Welcome to the Arena Operations Handbook. Find procedures, follow steps, and complete tasks with confidence.
        </p>
        <div className="mt-4">
          <Button variant="outline" className="w-full max-w-xl justify-start text-muted-foreground" onClick={() => setOpen(true)}>
            <Search className="mr-2 h-4 w-4" />
            Search procedures, steps, keywords...
            <kbd className="ml-auto rounded border bg-muted px-1.5 text-xs">⌘K</kbd>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Departments</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((d) => (
            <Link key={d.id} to={`/${d.id}`} className="group">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{d.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{d.description}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {procedures.filter((p) => p.department === d.id).length} procedures
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Use the sidebar to open a procedure.</p>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Daily Operations</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {dailyShortcuts.map((id) => {
            const p = procedureById(id);
            if (!p) return null;
            return (
              <Link
                key={id}
                to={`/${p.department}/${p.slug}`}
                className="flex items-center justify-between rounded-lg border bg-card px-3 py-2 text-sm hover:bg-accent"
              >
                <span>{p.title}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            );
          })}
        </div>
      </section>

      {recentProcs.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold">Recently Accessed</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {recentProcs.map((p) => (
              <Link
                key={p.id}
                to={`/${p.department}/${p.slug}`}
                className="flex items-center justify-between rounded-lg border bg-card px-3 py-2 text-sm hover:bg-accent"
              >
                <span>{p.title}</span>
                <Badge variant="secondary" className="text-xs">{p.department}</Badge>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-3 text-lg font-semibold">Frequently Accessed</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.slice(0, 6).map((p) => (
            <Link
              key={p.id}
              to={`/${p.department}/${p.slug}`}
              className="flex items-center justify-between rounded-lg border bg-card px-3 py-2 text-sm hover:bg-accent"
            >
              <span>{p.title}</span>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
