import React from 'react';
import { ReactSVG } from 'react-svg';
import Smile from './svg/emoji.svg';
import Smile1 from './svg/emoji (1).svg';
import Smile2 from './svg/emoji (2).svg';
import DropDown from './DropDown/DropDown';
import NavBar from './NavBar';
import NavItem from './NavItem';

const Nav = () => {
  const Items = [Smile, Smile1, Smile2];

  return (
    <NavBar>
      {Items.map((icon, i) => (
        <NavItem icon={<ReactSVG src={icon} className='svgIcon' />} />
      ))}
      <NavItem icon={<ReactSVG src={Smile} className='svgIcon' />}>
        <DropDown />
      </NavItem>
    </NavBar>
  );
};

export default Nav;
