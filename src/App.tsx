import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Header from './Header/Header';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
