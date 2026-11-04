import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { searchProcedures } from '@/data/procedures';
import { useSearch } from './SearchContext';
import { departments } from '@/data/navigation';

export function SearchDialog() {
  const { open, setOpen } = useSearch();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const results = searchProcedures(query);

  const deptLabel = (id: string) => departments.find((d) => d.id === id)?.label ?? id;

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput
          placeholder="Search procedures, steps, keywords..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {query.trim() === '' ? (
            <div className="px-3 py-6 text-center text-sm text-muted-foreground">
              Type to search the handbook.
            </div>
          ) : results.length === 0 ? (
            <CommandEmpty>No results found.</CommandEmpty>
          ) : (
            <CommandGroup heading="Procedures">
              {results.map(({ procedure, snippet }) => (
                <CommandItem
                  key={procedure.id}
                  value={procedure.id}
                  onSelect={() => {
                    navigate(`/${procedure.department}/${procedure.slug}`);
                    setOpen(false);
                  }}
                  className="flex flex-col items-start gap-1"
                >
                  <div className="flex w-full items-center justify-between gap-2">
                    <span className="font-medium">{procedure.title}</span>
                    <span className="text-xs text-muted-foreground">{deptLabel(procedure.department)}</span>
                  </div>
                  <span className="line-clamp-2 text-xs text-muted-foreground">{snippet}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
