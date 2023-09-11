type MenuOptionType = {
  name: string;
  uri: string;
  auth?: boolean; // undefined 면 다 보여짐, true면 로그인 한 유저만, false 하면 로그인 시 안보임
};

const menuInfo = {
  Home: { name: 'Home', uri: '/' },
  SignIn: { name: 'Sign in', uri: '/signIn', auth: false },
  SignUp: { name: 'Sign up', uri: '/signUp', auth: false },
  NewArticle: { name: 'New Article', uri: '/article', auth: true },
  Settings: { name: 'Settings', uri: '/setting', auth: true },
  User: { name: 'User', uri: '/user', auth: true },
};

type MenuType = keyof typeof menuInfo;
export const MENULIST: Record<MenuType, MenuOptionType> = menuInfo;
