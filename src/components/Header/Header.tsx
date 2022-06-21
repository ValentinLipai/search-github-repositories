import React, { FC, ReactNode } from 'react';

interface HeaderProps {
  menu: ReactNode
}

export const Header: FC<HeaderProps> = ({ menu }: HeaderProps) => (
  <header>
    {menu}
  </header>
);

export default Header;
