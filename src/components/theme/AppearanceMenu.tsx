import { useState } from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTheme, type ThemeColor } from './ThemeProvider';
import { cn } from '@/lib/utils';

const COLOR_HEX: Record<ThemeColor, string> = {
  white: '#e2e8f0',
  teal: '#0d9488',
  blue: '#2563eb',
  violet: '#7c3aed',
  orange: '#ea580c',
  rose: '#e11d48',
  green: '#16a34a',
};

const COLOR_NAME: Record<ThemeColor, string> = {
  white: 'White',
  teal: 'Teal',
  blue: 'Azul',
  violet: 'Violeta',
  orange: 'Naranja',
  rose: 'Rosa',
  green: 'Verde',
};

export function AppearanceMenu() {
  const { mode, setMode, color, setColor, colors } = useTheme();
  const [open, setOpen] = useState(false);

  const handleColor = (c: ThemeColor) => {
    setColor(c);
    setOpen(false);
    toast.success(`Color changed to ${COLOR_NAME[c]}`);
  };
  const handleMode = (m: 'light' | 'dark') => {
    setMode(m);
    toast.success(m === 'dark' ? 'Dark mode enabled' : 'Light mode enabled');
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Appearance">
          <Palette className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="space-y-3">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Mode</p>
            <div className="flex gap-2">
              <Button
                variant={mode === 'light' ? 'default' : 'outline'}
                size="sm"
                className="flex-1"
                onClick={() => handleMode('light')}
              >
                <Sun className="mr-1 h-4 w-4" /> Light
              </Button>
              <Button
                variant={mode === 'dark' ? 'default' : 'outline'}
                size="sm"
                className="flex-1"
                onClick={() => handleMode('dark')}
              >
                <Moon className="mr-1 h-4 w-4" /> Dark
              </Button>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Accent color</p>
            <div className="grid grid-cols-6 gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-label={c}
                  title={COLOR_NAME[c]}
                  onClick={() => handleColor(c)}
                  className={cn(
                    'h-7 w-7 rounded-full border-2 transition-transform',
                    color === c ? 'scale-110 border-foreground' : 'border-transparent hover:scale-105'
                  )}
                  style={{ backgroundColor: COLOR_HEX[c] }}
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Current: {COLOR_NAME[color]}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
