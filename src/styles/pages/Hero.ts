import styled from 'styled-components';

export const Container = styled.div`
  height: 60vh;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;


  display: grid;
  justify-content: stretch;

  grid-template-columns: 2rem 5rem auto 4rem 2rem;
  grid-template-rows: auto 8rem 1fr 30rem 5rem;


  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const VerticalTitle = styled.h1`
  grid-column: 2/3;
  grid-row: 2/5;

  align-self: flex-end;
  justify-self:flex-start;

  font-family: 'Raleway', sans-serif;
  font-size: clamp(2rem, 1.5rem + 5vh, 5rem);
  line-height: 5rem;
  vertical-align: middle;
  
  white-space: nowrap;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  letter-spacing: .2rem;

  color: ${({ theme }) => theme.primary};

  @media screen and (max-width: 320px) {
    writing-mode: horizontal-tb;
    transform: rotate(0deg);
    font-size: 3rem;
    grid-column: 1/6;
    grid-row: 1/2;
    justify-self: center;
  }
`;

export const NameText = styled.h1`
  grid-column: 3/5;
  grid-row: 2/3;

  align-self: center;

  text-transform: lowercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;
  font-size: clamp(2.3rem, 5vw, 6rem);
  text-align: right;

  white-space: nowrap;
  letter-spacing: .8vw;

  span{
    color: ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 320px) {
    grid-column: 1/6;
    text-align: center;
  }
`;

export const WelcomeText = styled.h4`
  grid-column: 3/4;
  grid-row: 4/5;

  justify-self: center;
  align-self: center;

  p {
    padding: 0 1rem;
    font-size: clamp(1.4rem, 2vw, 1.8rem);
    font-weight: 400;
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    grid-column: 3/5;
    grid-row: 4/5;
  }

  @media screen and (max-width: 320px) {
    grid-column: 1/6;
    text-align: center;
  }
`;

export const SocialMediaContainer = styled.div`
  grid-column: 4/5;
  grid-row: 4/5;

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

  @media screen and (max-width: 450px) {
    display: none;
  }
`;