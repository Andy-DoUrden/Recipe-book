import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 250px;
  padding: 1rem;
  border-left: 1px solid #ddd;
`;

const SidebarTitle = styled.h4`
  font-size: 16px;
`;

const SidebarItem = styled.li`
  list-style: none;
  cursor: pointer;
  color: #1e90ff;
  margin: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

export { SidebarWrapper, SidebarTitle, SidebarItem };
