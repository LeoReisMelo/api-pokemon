import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  max-width:100vw;
  border-bottom: 3px solid #2B83D2;
  background-color: #C82E2E;
`;
export const NavWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavImg = styled.div`
  img {
    height: 65px;
  }
`;
export const PokeTotal = styled.p`
  color: white;
  font-size: 20px;
  span {
    font-weight: bold;
  }
`;
