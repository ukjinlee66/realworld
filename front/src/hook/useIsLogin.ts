import { useEffect, useState } from 'react';
import { getStorageItem } from '../util/storage';
import { LOGIN_TOKEN_NAME } from '../constant/storage';

function useIsLogin() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(!!getStorageItem(LOGIN_TOKEN_NAME));
  }, []);

  return isLogin;
}

export default useIsLogin;
