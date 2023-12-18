import styled from 'styled-components';
import Menu from './Menu';

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 333px;
`;

const MenuMiddleWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const category = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/About' },
  { name: 'Project', href: '/Project' },
  { name: 'Board', href: '/Board' },
];

function MenuCategory() {
  return (
    <nav>
      <MenuWrapper>
        {category.map((item) => {
          return (
            <MenuMiddleWrapper key={item.name}>
              <Menu href={item.href}>{item.name}</Menu>
            </MenuMiddleWrapper>
          );
        })}
      </MenuWrapper>
    </nav>
  );
}

export default MenuCategory;
