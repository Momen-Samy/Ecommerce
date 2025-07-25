import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Provider } from 'react-redux'
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Main from './main/Main';
import Footer from './Footer/Footer';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import { store } from './store';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
