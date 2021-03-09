import React, { HtmlHTMLAttributes } from 'react';

import {
  Container,
  LinksWrapper,
  ContactWrapper,
} from '../../styles/components/NavigatorBar/MenuLinks';

interface MenuLinksProps extends HtmlHTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <LinksWrapper id='links-wrapper'>
        <a href='/'>
          <p>Home</p>
        </a>
        <a href='/'>
          <p>About</p>
        </a>
        <a href='/'>
          <p>Skills</p>
        </a>
        <a href='/'>
          <p>Works</p>
        </a>
        <a href='/'>
          <p>Blog</p>
        </a>
      </LinksWrapper>
      <ContactWrapper id='contact-wrapper'>
        <a href='/'>
          <p>Contact</p>
        </a>
      </ContactWrapper>
    </Container>
  );
};

export default MenuLinks;
