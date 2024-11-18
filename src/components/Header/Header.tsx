import { Burger } from '@components/Burger/Burger';
import { BurgerMenu } from '@components/BurgerMenu/BurgerMenu';
import { Nav } from '@components/Nav/Nav';
import { useBurgerMenu } from '@hooks/useBurgerMenu';

import styles from './Header.module.scss';

export const Header = () => {
  const { isOpen, closeMenu, toggleMenu, menuIcon } = useBurgerMenu();

  return (
    <header className={styles.header}>
      <Burger icon={menuIcon} handleToggle={toggleMenu} />
      <BurgerMenu isOpen={isOpen} handleClose={closeMenu} />
      <Nav />
    </header>
  );
};
