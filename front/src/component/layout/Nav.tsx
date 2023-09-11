import styled from 'styled-components';
import useIsLogin from '../../hook/useIsLogin';
import { MENULIST } from '../../constant/menu';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const isLogin = useIsLogin();
  const navigate = useNavigate();
  const renderMenu = () => {
    return Object.entries(MENULIST).map(([key, menuItem]) => {
      if (menuItem.auth !== undefined && menuItem.auth !== isLogin) return;
      return (
        <Item key={key} onClick={() => navigate(menuItem.uri)}>
          {menuItem.name}
        </Item>
      );
    });
  };
  return <Wrapper>{renderMenu()}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Item = styled.div`
  font-size: large;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray4};

  &:hover {
    color: ${({ theme }) => theme.color.gray2};
  }
`;

export default Nav;
