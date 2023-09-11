import { URI } from './uri';

type MenuOptionType = {
  name: string;
  uri: string;
  auth?: boolean; // undefined 면 다 보여짐, true면 로그인 한 유저만, false 하면 로그인 시 안보임
};

const menuInfo = {
  Home: { name: 'Home', uri: URI.Home },
  SignIn: { name: 'Sign in', uri: URI.SignIn, auth: false },
  SignUp: { name: 'Sign up', uri: URI.SignUp, auth: false },
  NewArticle: { name: 'New Article', uri: URI.NewArticle, auth: true },
  Settings: { name: 'Settings', uri: URI.Settings, auth: true },
  User: { name: 'User', uri: URI.User, auth: true },
};

type MenuType = keyof typeof menuInfo;
export const MENULIST: Record<MenuType, MenuOptionType> = menuInfo;
