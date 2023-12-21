import { motion } from 'framer-motion';
import styled from 'styled-components';
import Menu from './Menu';

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 333px;
`;

const MenuMiddleWrapper = styled(motion.li)`
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
        {category.map((item, index) => {
          return (
            <MenuMiddleWrapper
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Menu href={item.href}>{item.name}</Menu>
            </MenuMiddleWrapper>
          );
        })}
      </MenuWrapper>
    </nav>
  );
}

export default MenuCategory;
