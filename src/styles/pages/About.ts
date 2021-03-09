import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  overflow: hidden;
  
  padding: 4rem 0;
  
  display: flex;
  justify-content: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Background Gradient */
  background: #8e9eab;
  background: -webkit-linear-gradient(to left, #eef2f3, #8e9eab);
  background: linear-gradient(to left, #eef2f3, #8e9eab);
`;

export const ContainerContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;

  display:flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.main`
  height: 100%;
  flex: 3;
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
      font-size: clamp(4rem, 5vw, 7rem);
      padding-left: 1rem;
      font-family: 'Raleway';
      letter-spacing: .2rem;
      color: ${({ theme }) => theme.textDark};
    }
  }

  h4 {
    width: 100%;
    padding: 0 4rem;
    font-family: 'Open Sans';
    text-align: center;
    font-style: italic;
    font-weight: 400;
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    margin-bottom: 3rem;
    color: ${({theme})=> theme.textMedium};
  }

  p {
    padding-bottom: .8rem;
    font-size: clamp(1.4rem, 2vw, 1.8rem);
    text-align: justify;
    color: ${({theme})=> theme.textMedium};
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    padding-bottom: 2rem;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  height: 100%;

  .content{
    height: 60vh;
    width: auto;
    display: flex;
    justify-content:center;
    align-items:center;
    img{
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 768px) {
    height: 60%;

    .content {
      height: 40vh;
    }
    .content img{
      height: 20rem;
      width: 20rem;
      /* border: .2rem solid ${({ theme }) => theme.textMedium}; */
      box-shadow: 7px 7px 35px 5px rgba(26,23,56,0.8);
      border-radius: 50%;
      object-fit: cover;
      object-position: top;
      background-color: #726cf8;
      background-image: linear-gradient(315deg, #726cf8 0%, #e975a8 74%);
    }
  }
`;








