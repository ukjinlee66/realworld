import { DefaultContainer } from '../../style/common';
import styled from 'styled-components';

function Footer() {
  return (
    <DefaultContainer>
      <Wrapper>Footer</Wrapper>
    </DefaultContainer>
  );
}

const Wrapper = styled.div`
  height: 80px;
`;

export default Footer;
