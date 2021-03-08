import styled from 'styled-components';

interface StyledBurgerProps {
  isOpen: boolean;
}

export const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 50%;
  right: 2rem;
  display: none;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  transform: translateY(-50%);
  z-index: 10000;

  div {
    position: absolute;
    width: 2.5rem;
    height: 0.4rem;
    background: ${({theme}) => theme.secundary};
    border-radius: 1rem;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: translateY(-0.835rem);
      animation-fill-mode: forwards;
      animation-duration: 0.6s;
      animation-timing-function:ease-in-out;
      animation-name: ${({ isOpen }) => isOpen ? 'top-open' : 'top-close'};
    }
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: translateY(0.835rem);
      animation-fill-mode: forwards;
      animation-duration: 0.6s;
      animation-timing-function:ease-in-out;
      animation-name: ${({ isOpen }) => isOpen ? 'down-open' : 'down-close'};
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }

  @keyframes top-open {
    0% {
      transform: translateY(-0.835rem);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes top-close {
    0% {
      transform: rotate(45deg);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-0.835rem);
    }
  }

    @keyframes down-open {
    0% {
      transform: translateY(0.835rem);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: rotate(-45deg);
    }
  }

    @keyframes down-close {
    0% {
      transform: rotate(-45deg);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0.835rem);
    }
  }
`;
