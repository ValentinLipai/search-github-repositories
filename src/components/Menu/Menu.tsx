import React, { FC } from 'react';
import { useSrefActive } from '@uirouter/react';

export const Menu: FC = () => {
  const activeClass = 'active';
  const homeLink = useSrefActive('home', null, activeClass);
  const profileLink = useSrefActive('profile', null, activeClass);

  return (
    <div className="app-menu">
      <a href={homeLink.href} onClick={homeLink.onClick}>Home</a>
      <a href={profileLink.href} onClick={profileLink.onClick}>Profile</a>
    </div>
  );
};

export default Menu;
