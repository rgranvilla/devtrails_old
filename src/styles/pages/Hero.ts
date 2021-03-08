import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding-top: 15rem;
  padding-bottom: 3rem;


  display: grid;
  justify-content: stretch;

  grid-template-columns: 5rem auto 4rem;
  grid-template-rows: 5rem 1fr 20rem;


  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const VerticalTitle = styled.h1`
  grid-column: 1/2;
  grid-row: 1/4;

  align-self: flex-end;
  justify-self:flex-start;

  font-family: 'Raleway', sans-serif;
  font-size: clamp(2rem, 1.5rem + 5vh, 5rem);
  line-height: 3.5rem;
  
  white-space: nowrap;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  letter-spacing: .2rem;

  color: ${({ theme }) => theme.primary};
`;

export const NameText = styled.h1`
  grid-column: 2/4;
  grid-row: 1/2;

  font-family: 'Open Sans', sans-serif;
  font-size: clamp(2rem, 1rem + 5vw, 4rem);
  text-align: right;

  white-space: nowrap;
  letter-spacing: .2rem;

  span{
    color: ${({ theme }) => theme.primary};
  }
`;

export const WelcomeText = styled.h4`
  grid-column: 2/3;
  grid-row: 3/4;

  justify-self: center;
  align-self: center;

  p {
    font-size: clamp(1.2rem, 0.2rem + 2vw, 1.8rem);
    font-weight: 400;
    text-align: center;
  }
`;

export const SocialMediaContainer = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;

  justify-self:right;

  .iconContainer {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a{
    fill: ${({ theme }) => theme.primary};
  }
`;