import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  overflow-x:hidden;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;
  
  background: url('backgroundImg.png') no-repeat center;
  background-size: cover;
`;

export const Nav = styled.div`
  position: fixed;

  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;


  background: rgba(35, 42, 54,.3);
`;

export const AboutContainer = styled.div`
  height: 80vh;
`;