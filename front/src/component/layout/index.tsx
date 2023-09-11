import Header from './Header';
import Footer from './Footer';

type LayoutType = {
  children: JSX.Element
}

function Layout({children}: LayoutType) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
export default Layout;
