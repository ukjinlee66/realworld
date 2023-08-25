import { BrowserRouter, Route, Routes } from 'react-router-dom';
import URL from '../constant/URL';
import PageTemplate from '../component/template/PageTemplate';
import MainPage from '../page/MainPage/MainPage';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageTemplate />}>
          <Route path={URL.MAIN} element={<MainPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
