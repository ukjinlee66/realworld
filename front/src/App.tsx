import { ThemeProvider } from 'styled-components';
import Layout from './component/layout';
import Router from './router/Router';
import { theme } from './style/theme';
import GlobalStyle from './style/global';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
