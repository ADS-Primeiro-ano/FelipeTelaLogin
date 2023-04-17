
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Cadastro } from './pages/Cadastro';
import { Login } from './pages/Login';
import { Router } from './routes/Router';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/Themes/default';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme} >
        <BrowserRouter >
          <Router/>
        </BrowserRouter>

        <GlobalStyles/>
      </ThemeProvider>
    </>
  );
}

export default App;