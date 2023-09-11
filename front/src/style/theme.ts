const color = {
  primary: '#5CB85C',
  secondary: '#ECECDA',
  success: '#00A7FF', // 성공
  warning: '#FF7F27', // 주의
  error: '#E83F37', // 알림, 에러
  black: '#000000',
  white: '#ffffff',
  gray1: '#F6F8F9', // input header(title)
  gray2: '#C0C4C8', // border, disabled
  gray3: '#A5ABB1', // 플레이스홀더
  gray4: '#6F7880', // button
  gray5: '#585E65', // 서브내용
};

const deviceSize = {
  mobile: '375px',
  tablet: '768px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSize.mobile})`,
  tablet: `screen and (max-width: ${deviceSize.tablet})`,
};

export const theme = {
  color,
  device,
};
