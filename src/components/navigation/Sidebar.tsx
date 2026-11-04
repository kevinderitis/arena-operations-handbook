import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { navigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="flex h-full flex-col gap-1 overflow-y-auto px-3 py-4">
      <Link
        to="/"
        onClick={onNavigate}
        className={cn(
          'mb-2 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold text-foreground',
          path === '/' && 'bg-accent'
        )}
      >
        Handbook Home
      </Link>
      {navigation.map((group) => {
        const isActiveGroup = group.items.some((i) => path === `/${i.department}/${i.slug}`);
        return (
          <SidebarGroup key={group.id} group={group} isActiveGroup={isActiveGroup} path={path} onNavigate={onNavigate} />
        );
      })}
    </nav>
  );
}

function SidebarGroup({ group, isActiveGroup, path, onNavigate }: { group: (typeof navigation)[number]; isActiveGroup: boolean; path: string; onNavigate?: () => void }) {
  const [open, setOpen] = useState<boolean>(isActiveGroup || true);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="group/collapsible">
      <CollapsibleTrigger
        className={cn(
          'flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:bg-accent hover:text-foreground',
        )}
      >
        <span>{group.title}</span>
        {open ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 flex flex-col gap-0.5 pl-1">
        {group.items.map((item) => {
          const href = `/${item.department}/${item.slug}`;
          const active = path === href;
          return (
            <Link
              key={item.id}
              to={href}
              onClick={onNavigate}
              className={cn(
                'rounded-md px-2 py-1.5 text-sm transition-colors',
                active
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'text-foreground/80 hover:bg-accent hover:text-foreground'
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
