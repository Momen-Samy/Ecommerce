import { createContext, useState, useMemo } from 'react';
import {
  type Theme,
  type ThemeOptions,
  type PaletteMode,
  createTheme,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    searchButton: Palette['primary'];
    searchBarAndList: {
      ListText: string;
      ListBorderLeft: string;
      backgroundSearchBar: string;
      BarPlaceHolder: string;
      SearchIcon: string;
      ListBorder: string;
      ListBorderAtHover: string;
    };
  }
  interface PaletteOptions {
    searchButton?: PaletteOptions['primary'];
    searchBarAndList?: {
      ListText: string;
      ListBorderLeft: string;
      backgroundSearchBar: string;
      BarPlaceHolder: string;
      SearchIcon: string;
      ListBorder: string;
      ListBorderAtHover: string;
    };
  }
}

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          searchButton: {
            main: '#1F2937',
          },
          searchBarAndList: {
            ListText: '#4b566b',
            ListBorderLeft: '#dedede',
            backgroundSearchBar: '#f3f5f9',
            BarPlaceHolder: '#2b3445',
            SearchIcon: '#7d879c',
            ListBorderAtHover: '#2B3445',
            ListBorder: '#cacaca',
          },
        }
      : {
          // palette values for dark mode
          searchButton: {
            main: '#777',
          },
          searchBarAndList: {
            ListText: '#fff',
            ListBorderLeft: '#616060',
            backgroundSearchBar: '#484848',
            BarPlaceHolder: '#2b3445',
            SearchIcon: '#7d879c',
            ListBorder: '#5a5959',
            ListBorderAtHover: '#fff',
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem('mode') as PaletteMode) ?? 'light'
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode(prev => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo<Theme>(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return [theme, colorMode];
};
