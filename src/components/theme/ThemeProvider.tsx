import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type ThemeColor = 'white' | 'teal' | 'blue' | 'violet' | 'orange' | 'rose' | 'green';

interface Preset {
  light: Record<string, string>;
  dark: Record<string, string>;
}

function makePreset(H: number, C: number): Preset {
  const c = (k: number) => (C * k).toFixed(3);
  const h = H;
  const primary = `oklch(0.5 ${c(1)} ${h})`;
  const primaryDark = `oklch(0.7 ${c(0.85)} ${h})`;
  return {
    light: {
      '--background': `oklch(0.97 ${c(0.15)} ${h})`,
      '--foreground': `oklch(0.2 ${c(0.3)} ${h})`,
      '--card': `oklch(0.995 ${c(0.08)} ${h})`,
      '--card-foreground': `oklch(0.2 ${c(0.3)} ${h})`,
      '--popover': `oklch(0.995 ${c(0.08)} ${h})`,
      '--popover-foreground': `oklch(0.2 ${c(0.3)} ${h})`,
      '--primary': primary,
      '--primary-foreground': 'oklch(0.985 0 0)',
      '--secondary': `oklch(0.93 ${c(0.15)} ${h})`,
      '--secondary-foreground': `oklch(0.25 ${c(0.3)} ${h})`,
      '--muted': `oklch(0.93 ${c(0.12)} ${h})`,
      '--muted-foreground': `oklch(0.45 ${c(0.2)} ${h})`,
      '--accent': `oklch(0.93 ${c(0.15)} ${h})`,
      '--accent-foreground': `oklch(0.25 ${c(0.3)} ${h})`,
      '--destructive': 'oklch(0.577 0.245 27.325)',
      '--border': `oklch(0.88 ${c(0.15)} ${h})`,
      '--input': `oklch(0.88 ${c(0.15)} ${h})`,
      '--ring': primary,
      '--sidebar': `oklch(0.96 ${c(0.12)} ${h})`,
      '--sidebar-foreground': `oklch(0.2 ${c(0.3)} ${h})`,
      '--sidebar-primary': primary,
      '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
      '--sidebar-accent': `oklch(0.92 ${c(0.15)} ${h})`,
      '--sidebar-accent-foreground': `oklch(0.25 ${c(0.3)} ${h})`,
      '--sidebar-border': `oklch(0.88 ${c(0.15)} ${h})`,
      '--sidebar-ring': primary,
    },
    dark: {
      '--background': `oklch(0.18 ${c(0.15)} ${h})`,
      '--foreground': `oklch(0.95 ${c(0.1)} ${h})`,
      '--card': `oklch(0.22 ${c(0.15)} ${h})`,
      '--card-foreground': `oklch(0.95 ${c(0.1)} ${h})`,
      '--popover': `oklch(0.22 ${c(0.15)} ${h})`,
      '--popover-foreground': `oklch(0.95 ${c(0.1)} ${h})`,
      '--primary': primaryDark,
      '--primary-foreground': `oklch(0.18 ${c(0.15)} ${h})`,
      '--secondary': `oklch(0.26 ${c(0.15)} ${h})`,
      '--secondary-foreground': `oklch(0.95 ${c(0.1)} ${h})`,
      '--muted': `oklch(0.26 ${c(0.12)} ${h})`,
      '--muted-foreground': `oklch(0.7 ${c(0.1)} ${h})`,
      '--accent': `oklch(0.26 ${c(0.15)} ${h})`,
      '--accent-foreground': `oklch(0.95 ${c(0.1)} ${h})`,
      '--destructive': 'oklch(0.704 0.191 22.216)',
      '--border': `oklch(0.3 ${c(0.15)} ${h})`,
      '--input': `oklch(0.3 ${c(0.15)} ${h})`,
      '--ring': primaryDark,
      '--sidebar': `oklch(0.16 ${c(0.12)} ${h})`,
      '--sidebar-foreground': `oklch(0.95 ${c(0.1)} ${h})`,
      '--sidebar-primary': primaryDark,
      '--sidebar-primary-foreground': `oklch(0.18 ${c(0.15)} ${h})`,
      '--sidebar-accent': `oklch(0.24 ${c(0.15)} ${h})`,
      '--sidebar-accent-foreground': `oklch(0.95 ${c(0.1)} ${h})`,
      '--sidebar-border': `oklch(0.3 ${c(0.15)} ${h})`,
      '--sidebar-ring': primaryDark,
    },
  };
}

const WHITE_PRESET: Preset = {
  light: {
    '--background': 'oklch(1 0 0)',
    '--foreground': 'oklch(0.145 0 0)',
    '--card': 'oklch(1 0 0)',
    '--card-foreground': 'oklch(0.145 0 0)',
    '--popover': 'oklch(1 0 0)',
    '--popover-foreground': 'oklch(0.145 0 0)',
    '--primary': 'oklch(0.205 0 0)',
    '--primary-foreground': 'oklch(0.985 0 0)',
    '--secondary': 'oklch(0.97 0 0)',
    '--secondary-foreground': 'oklch(0.205 0 0)',
    '--muted': 'oklch(0.97 0 0)',
    '--muted-foreground': 'oklch(0.556 0 0)',
    '--accent': 'oklch(0.97 0 0)',
    '--accent-foreground': 'oklch(0.205 0 0)',
    '--destructive': 'oklch(0.577 0.245 27.325)',
    '--border': 'oklch(0.922 0 0)',
    '--input': 'oklch(0.922 0 0)',
    '--ring': 'oklch(0.708 0 0)',
    '--sidebar': 'oklch(0.985 0 0)',
    '--sidebar-foreground': 'oklch(0.145 0 0)',
    '--sidebar-primary': 'oklch(0.205 0 0)',
    '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
    '--sidebar-accent': 'oklch(0.97 0 0)',
    '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
    '--sidebar-border': 'oklch(0.922 0 0)',
    '--sidebar-ring': 'oklch(0.708 0 0)',
  },
  dark: {
    '--background': 'oklch(0.145 0 0)',
    '--foreground': 'oklch(0.985 0 0)',
    '--card': 'oklch(0.205 0 0)',
    '--card-foreground': 'oklch(0.985 0 0)',
    '--popover': 'oklch(0.205 0 0)',
    '--popover-foreground': 'oklch(0.985 0 0)',
    '--primary': 'oklch(0.922 0 0)',
    '--primary-foreground': 'oklch(0.205 0 0)',
    '--secondary': 'oklch(0.269 0 0)',
    '--secondary-foreground': 'oklch(0.985 0 0)',
    '--muted': 'oklch(0.269 0 0)',
    '--muted-foreground': 'oklch(0.708 0 0)',
    '--accent': 'oklch(0.269 0 0)',
    '--accent-foreground': 'oklch(0.985 0 0)',
    '--destructive': 'oklch(0.704 0.191 22.216)',
    '--border': 'oklch(1 0 0 / 10%)',
    '--input': 'oklch(1 0 0 / 15%)',
    '--ring': 'oklch(0.556 0 0)',
    '--sidebar': 'oklch(0.205 0 0)',
    '--sidebar-foreground': 'oklch(0.985 0 0)',
    '--sidebar-primary': 'oklch(0.488 0.243 264.376)',
    '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
    '--sidebar-accent': 'oklch(0.269 0 0)',
    '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
    '--sidebar-border': 'oklch(1 0 0 / 10%)',
    '--sidebar-ring': 'oklch(0.556 0 0)',
  },
};


const PRESETS: Record<ThemeColor, Preset> = {
  white: WHITE_PRESET,
  teal: makePreset(195, 0.16),
  blue: makePreset(250, 0.18),
  violet: makePreset(290, 0.20),
  orange: makePreset(50, 0.18),
  rose: makePreset(10, 0.20),
  green: makePreset(145, 0.16),
};

interface Ctx {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  color: ThemeColor;
  setColor: (c: ThemeColor) => void;
  colors: ThemeColor[];
}

const CtxObj = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme-mode');
    return stored === 'dark' ? 'dark' : 'light';
  });
  const [color, setColorState] = useState<ThemeColor>(() => {
    const stored = localStorage.getItem('theme-color');
    return (stored === 'neutral' ? 'white' : (stored as ThemeColor)) || 'white';
  });

  const setMode = (m: ThemeMode) => {
    setModeState(m);
    localStorage.setItem('theme-mode', m);
  };
  const setColor = (c: ThemeColor) => {
    setColorState(c);
    localStorage.setItem('theme-color', c);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', mode === 'dark');
    const vars = PRESETS[color][mode];
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [mode, color]);

  return (
    <CtxObj.Provider value={{ mode, setMode, color, setColor, colors: Object.keys(PRESETS) as ThemeColor[] }}>
      {children}
    </CtxObj.Provider>
  );
}

export function useTheme() {
  const v = useContext(CtxObj);
  if (!v) throw new Error('useTheme outside provider');
  return v;
}
