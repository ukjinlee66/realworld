import { Route, Routes } from 'react-router-dom';
import { MENULIST } from '../constant/menu';
import MainPage from '../page/MainPage/MainPage';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';

function Router() {
  return (
    <Routes>
      <Route path={MENULIST.Home.uri} element={<MainPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
