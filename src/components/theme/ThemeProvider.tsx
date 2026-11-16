import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type ThemeColor = 'teal' | 'blue' | 'violet' | 'orange' | 'rose' | 'green';

interface Preset {
  light: Record<string, string>;
  dark: Record<string, string>;
}

const PRESETS: Record<ThemeColor, Preset> = {
  teal: {
    light: { '--primary': 'oklch(0.5 0.16 195)', '--primary-foreground': 'oklch(0.985 0 0)', '--ring': 'oklch(0.5 0.16 195)', '--sidebar-primary': 'oklch(0.5 0.16 195)', '--sidebar-primary-foreground': 'oklch(0.985 0 0)' },
    dark: { '--primary': 'oklch(0.7 0.14 195)', '--primary-foreground': 'oklch(0.145 0 0)', '--ring': 'oklch(0.7 0.14 195)', '--sidebar-primary': 'oklch(0.7 0.14 195)', '--sidebar-primary-foreground': 'oklch(0.145 0 0)' },
  },
  blue: {
    light: { '--primary': 'oklch(0.5 0.18 250)', '--primary-foreground': 'oklch(0.985 0 0)', '--ring': 'oklch(0.5 0.18 250)', '--sidebar-primary': 'oklch(0.5 0.18 250)', '--sidebar-primary-foreground': 'oklch(0.985 0 0)' },
    dark: { '--primary': 'oklch(0.7 0.16 250)', '--primary-foreground': 'oklch(0.145 0 0)', '--ring': 'oklch(0.7 0.16 250)', '--sidebar-primary': 'oklch(0.7 0.16 250)', '--sidebar-primary-foreground': 'oklch(0.145 0 0)' },
  },
  violet: {
    light: { '--primary': 'oklch(0.5 0.2 290)', '--primary-foreground': 'oklch(0.985 0 0)', '--ring': 'oklch(0.5 0.2 290)', '--sidebar-primary': 'oklch(0.5 0.2 290)', '--sidebar-primary-foreground': 'oklch(0.985 0 0)' },
    dark: { '--primary': 'oklch(0.7 0.18 290)', '--primary-foreground': 'oklch(0.145 0 0)', '--ring': 'oklch(0.7 0.18 290)', '--sidebar-primary': 'oklch(0.7 0.18 290)', '--sidebar-primary-foreground': 'oklch(0.145 0 0)' },
  },
  orange: {
    light: { '--primary': 'oklch(0.6 0.18 50)', '--primary-foreground': 'oklch(0.985 0 0)', '--ring': 'oklch(0.6 0.18 50)', '--sidebar-primary': 'oklch(0.6 0.18 50)', '--sidebar-primary-foreground': 'oklch(0.985 0 0)' },
    dark: { '--primary': 'oklch(0.75 0.16 50)', '--primary-foreground': 'oklch(0.145 0 0)', '--ring': 'oklch(0.75 0.16 50)', '--sidebar-primary': 'oklch(0.75 0.16 50)', '--sidebar-primary-foreground': 'oklch(0.145 0 0)' },
  },
  rose: {
    light: { '--primary': 'oklch(0.55 0.2 10)', '--primary-foreground': 'oklch(0.985 0 0)', '--ring': 'oklch(0.55 0.2 10)', '--sidebar-primary': 'oklch(0.55 0.2 10)', '--sidebar-primary-foreground': 'oklch(0.985 0 0)' },
    dark: { '--primary': 'oklch(0.7 0.18 10)', '--primary-foreground': 'oklch(0.145 0 0)', '--ring': 'oklch(0.7 0.18 10)', '--sidebar-primary': 'oklch(0.7 0.18 10)', '--sidebar-primary-foreground': 'oklch(0.145 0 0)' },
  },
  green: {
    light: { '--primary': 'oklch(0.5 0.16 145)', '--primary-foreground': 'oklch(0.985 0 0)', '--ring': 'oklch(0.5 0.16 145)', '--sidebar-primary': 'oklch(0.5 0.16 145)', '--sidebar-primary-foreground': 'oklch(0.985 0 0)' },
    dark: { '--primary': 'oklch(0.7 0.14 145)', '--primary-foreground': 'oklch(0.145 0 0)', '--ring': 'oklch(0.7 0.14 145)', '--sidebar-primary': 'oklch(0.7 0.14 145)', '--sidebar-primary-foreground': 'oklch(0.145 0 0)' },
  },
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
    return (stored as ThemeColor) || 'teal';
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
