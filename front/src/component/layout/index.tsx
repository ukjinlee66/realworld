import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

type LayoutType = {
  children: JSX.Element;
};

function Layout({ children }: LayoutType) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  min-height: calc(100vh - 160px);
`;

export default Layout;
