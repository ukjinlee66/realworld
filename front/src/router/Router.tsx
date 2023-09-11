import { Route, Routes } from 'react-router-dom';
import MainPage from '../page/MainPage/MainPage';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';
import { URI } from '../constant/uri';

function Router() {
  return (
    <Routes>
      <Route path={URI.Home} element={<MainPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
