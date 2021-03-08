const textPrimaryNavbar = theme.textPrimaryNavbar;
const textSecundaryNavbar = theme.textSecundaryNavbar;
const divBar = shade(.05, textSecundaryNavbar);

export const NavigatorMenu = styled.div`
  flex:3;
  display: flex;
  align-items: center;
  height: 100%;

/* @media screen and (max-width: 768px){
  height: 90vh;
  width: 100%;
  flex-direction: column;
} */
`;

export const LinksWrapper = styled.div`
  width: 100%;
  flex:4;
  display:flex;
  justify-content:space-between;

  a{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover{
    background: ${shade(0.2, `${textSecundaryNavbar}`)};
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

  /* @media screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    justify-content: space-around;

    a{
      border-bottom:2px solid ${divBar};
    }

    p{
      font-size: 2rem;
    }
  } */
`;

export const ContactWrapper = styled.div`
  width: 100%;
  flex:1;
  display:flex;
  justify-content:flex-end;

  a{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  a:hover{
    background: ${shade(0.2, `${textSecundaryNavbar}`)};
  }

  p{
    color: ${textSecundaryNavbar};
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: clamp(1.4rem, 1.6vw, 1.6rem);
    text-align: right;
    line-height: 1;
  }

  p:hover{
    color: ${shade(0.2, `${textSecundaryNavbar}`)};
  }

  /* @media screen and (max-width: 768px){
    width: 100%;
    justify-content: center;

    a{
      width: 100%;
    }

    p{
      font-size: 2rem;
      text-align: center;
      width: 100%;
      color: ${textPrimaryNavbar};
    }

    p:hover{
      color: ${shade(0.2, `${textPrimaryNavbar}`)};
    }
  } */
`;