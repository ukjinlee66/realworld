import styled from 'styled-components';

export const FullContainer = styled.div`
  width: 100%;
`;

export const DefaultContainer = styled.div`
  padding: 0px 100px;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0px 30px;
  }
`;
