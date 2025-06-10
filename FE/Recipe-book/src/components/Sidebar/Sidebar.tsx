import React from 'react';
import { SidebarWrapper, SidebarTitle, SidebarItem } from './Sidebar.styled';

interface Props {
  items: any[];
  onItemClick: (id: string) => void;
}

const Sidebar: React.FC<Props> = ({ items, onItemClick }) => (
  <SidebarWrapper>
    <SidebarTitle>Same Category</SidebarTitle>
    <ul>
      {items.map((item) => (
        <SidebarItem key={item.idMeal} onClick={() => onItemClick(item.idMeal)}>
          {item.strMeal}
        </SidebarItem>
      ))}
    </ul>
  </SidebarWrapper>
);

export default Sidebar;
