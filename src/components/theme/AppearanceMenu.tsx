import { Moon, Sun, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTheme, type ThemeColor } from './ThemeProvider';
import { cn } from '@/lib/utils';

const COLOR_HEX: Record<ThemeColor, string> = {
  teal: '#0d9488',
  blue: '#2563eb',
  violet: '#7c3aed',
  orange: '#ea580c',
  rose: '#e11d48',
  green: '#16a34a',
};

export function AppearanceMenu() {
  const { mode, setMode, color, setColor, colors } = useTheme();
  return (
    <Popover>
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
                onClick={() => setMode('light')}
              >
                <Sun className="mr-1 h-4 w-4" /> Light
              </Button>
              <Button
                variant={mode === 'dark' ? 'default' : 'outline'}
                size="sm"
                className="flex-1"
                onClick={() => setMode('dark')}
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
                  onClick={() => setColor(c)}
                  className={cn(
                    'h-7 w-7 rounded-full border-2 transition-transform',
                    color === c ? 'scale-110 border-foreground' : 'border-transparent hover:scale-105'
                  )}
                  style={{ backgroundColor: COLOR_HEX[c] }}
                />
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
