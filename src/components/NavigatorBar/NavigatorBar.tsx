import React from 'react';

import {
  Container,
  MenuWrapper,
  LogoContainer,
} from '../../styles/components/NavigatorBar/NavigatorBar';

import Burger from './Burger';

const NavigatorBar: React.FC = () => {
  return (
    <Container>
      <MenuWrapper id='menu-wrapper'>
        <LogoContainer>
          <a href='/'>
            <img src='logo-full.svg' alt='Dev Trails' />
          </a>
        </LogoContainer>
        <Burger />
      </MenuWrapper>
    </Container>
  );
};

export default NavigatorBar;
