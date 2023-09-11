import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { DefaultContainer } from '../../style/common';
import { MENULIST } from '../../constant/menu';

function Header() {
  const navigate = useNavigate();
  return (
    <DefaultContainer>
      <Container>
        <Logo onClick={() => navigate(MENULIST.Home.uri)}>REAL FT</Logo>
        <Nav />
      </Container>
    </DefaultContainer>
  );
}

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 800;
  font-size: 2rem;
  text-shadow: 2px 2px 2px ${({ theme }) => theme.color.gray2};
  cursor: pointer;
`;

export default Header;
