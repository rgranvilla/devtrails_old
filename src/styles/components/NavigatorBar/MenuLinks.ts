import styled from 'styled-components';
import { shade } from 'polished';
import theme from '../../theme';

const textPrimaryNavbar = theme.textPrimaryNavbar;
const textSecundaryNavbar = theme.textSecundaryNavbar;
const bgPrimaryNavbar = theme.bgPrimaryNavbar;
const bgSecundaryNavbar = theme.bgSecundaryNavbar;
const divBar = shade(.05, textSecundaryNavbar);

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100%;
  flex: 4;
  right: 4rem;
  top: 0;
  display: flex;

  @media screen and (max-width: 768px) {
    transition: transform .8s ease-in-out;
    position: absolute;
    width: 80%;
    right: -80vw;
    flex-flow: column nowrap;
    height: 100vh;
    background: ${bgPrimaryNavbar};
    transform: ${({ isOpen }) => isOpen ? 'translateX(-80vw)' : 'translateX(80vw)'};
  }
`;

export const LinksWrapper = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    height: 100%;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

    p{
    color: ${textPrimaryNavbar};
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: clamp(1.4rem, 1.6vw, 1.6rem);
    text-align: center;
    line-height: 1;
  }

  p:hover{
    color: ${shade(0.2, `${textPrimaryNavbar}`)};
  }

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    width: 100%;
    justify-content: space-around;

    a{
      width: 100%;
      border-bottom:2px solid ${divBar};
    }

    a:hover{
      background: ${bgSecundaryNavbar};
      p{
        font-weight: 800;
        color: ${textPrimaryNavbar};
      }
    }

    p{
      font-size: 1.6rem;
    }
  }
`;

export const ContactWrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;

  /* background: red; */
  
  a{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2rem;
  }

  p{
    color: ${textSecundaryNavbar};
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: clamp(1.4rem, 1.6vw, 1.6rem);
  }

  p:hover{
    color: ${shade(0.2, `${textSecundaryNavbar}`)};
  }

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;

    a{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      padding-right: 0;
    }
    
    a:hover{
      width:100%;
      justify-content: center;
      background: ${bgSecundaryNavbar};
      p{
        font-weight: 800;
        color: ${textPrimaryNavbar};
      }
    }
    
    p{
      text-align: center;
      color: ${textPrimaryNavbar};
    }
  }
`;

