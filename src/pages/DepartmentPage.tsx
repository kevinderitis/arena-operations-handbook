import { useParams, Link, Navigate } from 'react-router-dom';
import { departments } from '@/data/navigation';
import { procedures } from '@/data/procedures';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export default function DepartmentPage() {
  const { department } = useParams();
  const dept = departments.find((d) => d.id === department || d.path === department);
  if (!dept) return <Navigate to="/404" replace />;
  const items = procedures.filter((p) => p.department === dept.id);
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: dept.label }]} />
      <header>
        <h1 className="text-2xl font-bold tracking-tight">{dept.label}</h1>
        <p className="mt-1 text-muted-foreground">{dept.description}</p>
      </header>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((p) => (
          <Link
            key={p.id}
            to={`/${p.department}/${p.slug}`}
            className="rounded-lg border bg-card px-3 py-2 text-sm hover:bg-accent"
          >
            <p className="font-medium">{p.title}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
