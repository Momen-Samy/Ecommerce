import { createContext, useState, useMemo } from 'react';
import {
  type Theme,
  type ThemeOptions,
  type PaletteMode,
  createTheme,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    searchBarAndList: {
      ListText: string;
      ListBorderLeft: string;
      backgroundSearchBar: string;
      BarPlaceHolder: string;
      SearchIcon: string;
      ListBorder: string;
      ListBorderAtHover: string;
      searchButton: string;
    };
    BasicMenu: {
      backGround: string;
    };
    toggleMenu: {
      border: string;
    };
    mainBackground: {
      primary: string;
    };
  }
  interface PaletteOptions {
    searchBarAndList?: {
      ListText: string;
      ListBorderLeft: string;
      backgroundSearchBar: string;
      BarPlaceHolder: string;
      SearchIcon: string;
      ListBorder: string;
      ListBorderAtHover: string;
      searchButton: string;
    };
    BasicMenu: {
      backGround: string;
    };
    toggleMenu: {
      border: string;
    };
    mainBackground: {
      primary: string;
    };
  }
}

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          searchBarAndList: {
            ListText: '#4b566b',
            ListBorderLeft: '#dedede',
            backgroundSearchBar: '#f3f5f9',
            BarPlaceHolder: '#2b3445',
            SearchIcon: '#7d879c',
            ListBorderAtHover: '#2B3445',
            ListBorder: '#cacaca',
            searchButton: ' #1F2937',
          },
          BasicMenu: {
            backGround: '#F6F9FC',
          },
          toggleMenu: {
            border: '#0000001f', //
          },
          mainBackground: {
            primary: '#F6F9FC',
          },
        }
      : {
          // palette values for dark mode
          searchBarAndList: {
            ListText: '#fff',
            ListBorderLeft: '#616060',
            backgroundSearchBar: '#484848',
            BarPlaceHolder: '#2b3445',
            SearchIcon: '#7d879c',
            ListBorder: '#5a5959',
            ListBorderAtHover: '#fff',
            searchButton: '#777',
          },
          BasicMenu: {
            backGround: '#252b32',
          },
          toggleMenu: {
            border: '#ffffff1f',
          },
          mainBackground: {
            primary: '#252b32',
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
