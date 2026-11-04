import { useEffect, useState } from 'react';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import type { ChecklistItem } from '@/types/documentation';

export function Checklist({ procedureId, items }: { procedureId: string; items: ChecklistItem[] }) {
  const storageKey = `checklist:${procedureId}`;
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked, storageKey]);

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const completed = items.filter((i) => checked[i.id]).length;
  const reset = () => setChecked({});

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <h3 className="font-semibold">Completion Checklist</h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>
            {completed}/{items.length} complete
          </span>
          <Button variant="ghost" size="sm" onClick={reset} className="h-7 px-2">
            <RotateCcw className="mr-1 h-3.5 w-3.5" /> Reset
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <label key={item.id} className="flex cursor-pointer items-start gap-3 rounded-md p-1.5 hover:bg-accent/50">
            <Checkbox checked={!!checked[item.id]} onCheckedChange={() => toggle(item.id)} />
            <span className={checked[item.id] ? 'text-muted-foreground line-through' : ''}>{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
