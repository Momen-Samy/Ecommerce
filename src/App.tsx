import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Main from './main/Main';
import Footer from './Footer/Footer';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Hero />
          <Main />
          <Footer />

          <ScrollToTop />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
