import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  
  padding-top: 4rem;
  padding-bottom: 4rem;
  
  display: flex;
  justify-content: center;

  /* Background Gradient */
  background: #8e9eab;
  background: -webkit-linear-gradient(to left, #eef2f3, #8e9eab);
  background: linear-gradient(to left, #eef2f3, #8e9eab);
`;

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1200px;

  display:flex;
  justify-content: space-between;
`;

export const LeftContent = styled.main`
margin-right: 2rem;

  .titleContainer{
    display: flex;
    align-items: baseline;
    margin-bottom: 3rem;

    div{
      height: 5rem;
      width:2px;
      background: ${({theme})=> theme.textDark};
    }

    h1{
      height: 100%;
      font-size: 4rem;
      padding-left: 1rem;
      font-family: 'Raleway';
      letter-spacing: .2rem;
      color: ${({theme}) => theme.textDark}
    }
  }

  h4 {
    width: 100%;
    font-family: 'Open Sans';
    text-align: center;
    font-style: italic;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 3rem;
    color: ${({theme})=> theme.textMedium};
  }

  p {
    padding-bottom: .8rem;
    font-size: 1.2rem;
    text-align: justify;
    color: ${({theme})=> theme.textMedium};
  }
`;

export const RightContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content:flex-end;
`;








