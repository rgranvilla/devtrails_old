import styled from 'styled-components';

export const Container = styled.div`
  height: 6rem;
  width: 100vw;
  max-width: 120rem;

  position: relative;

  display: flex;
  justify-content: space-between;
  
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: 768px){
  width: 100vw;
  }
`;

export const MenuWrapper = styled.div`
  width: calc(100% - 2rem);
  height: 100%;
  display: flex;
  justify-content: space-between;
  right: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  flex:2;
  height: 100%;
  transition: flex-basis 0.5s ease-in-out;
  
  a{
    padding-left: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }

  img{
    height: 3rem;
  }

  @media screen and (max-width: 768px) {
    a{
      flex: 1;
      padding-left: 0;
      justify-content: center;
    }
  }
`;
