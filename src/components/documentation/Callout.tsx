import { Info, AlertTriangle, Lightbulb, AlertCircle, XCircle } from 'lucide-react';
import type { CalloutType } from '@/types/documentation';
import { cn } from '@/lib/utils';

const config: Record<CalloutType, { icon: React.ComponentType<{ className?: string }>; classes: string; label: string }> = {
  info: { icon: Info, classes: 'border-blue-200 bg-blue-50 text-blue-900', label: 'Info' },
  important: { icon: AlertCircle, classes: 'border-primary/30 bg-primary/5 text-foreground', label: 'Important' },
  warning: { icon: AlertTriangle, classes: 'border-amber-200 bg-amber-50 text-amber-900', label: 'Warning' },
  tip: { icon: Lightbulb, classes: 'border-emerald-200 bg-emerald-50 text-emerald-900', label: 'Tip' },
  error: { icon: XCircle, classes: 'border-red-200 bg-red-50 text-red-900', label: 'Error' },
};

export function Callout({ type, title, content }: { type: CalloutType; title?: string; content: string }) {
  const c = config[type];
  const Icon = c.icon;
  return (
    <div className={cn('my-3 flex gap-3 rounded-lg border p-3 text-sm', c.classes)}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <div>
        <p className="font-medium">{title || c.label}</p>
        <p className="mt-0.5 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
