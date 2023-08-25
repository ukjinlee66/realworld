import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

function PageTemplate() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default PageTemplate;
