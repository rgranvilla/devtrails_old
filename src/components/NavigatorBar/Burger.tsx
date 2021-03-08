import React, { useState } from 'react';

import { StyledBurger } from '../../styles/components/NavigatorBar/Burger';
import MenuLinks from './MenuLinks';

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <StyledBurger isOpen={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MenuLinks isOpen={open} />
    </>
  );
};

export default Burger;
