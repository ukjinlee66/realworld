import { ThemeProvider } from 'styled-components';
import Layout from './component/layout';
import Router from './router/Router';
import { theme } from './style/theme';
import GlobalStyle from './style/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
