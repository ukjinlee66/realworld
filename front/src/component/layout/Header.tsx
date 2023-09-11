import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <div>conduit</div>
      <div>tags</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

export default Header;
