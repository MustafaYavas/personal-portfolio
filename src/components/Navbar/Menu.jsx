import { useState } from 'react';
import Link from 'next/link';

import styles from './Menu.module.scss';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickItem = () => {
    setShowMenu(false);
  };

  return (
    <div className={styles['mobile-menu']}>
      <div
        onClick={handleShowMenu}
        className={` ${styles['menu-btn']} ${showMenu ? styles.open : ''}`}
      >
        <div className={`${styles['menu-btn-burger']}`}></div>
      </div>

      {showMenu && (
        <ul className={`block ${styles['nav-menu']}`}>
          <li className="border-b border-gray-600" onClick={handleClickItem}>
            <Link href="#home">Home</Link>
          </li>
          <li className="border-b border-gray-600" onClick={handleClickItem}>
            <Link href="#about">About</Link>
          </li>
          <li className="border-b border-gray-600" onClick={handleClickItem}>
            <Link href="#do">What I Do</Link>
          </li>
          <li className="border-b border-gray-600" onClick={handleClickItem}>
            <Link href="#resume">Resume</Link>
          </li>
          <li className="border-b border-gray-600" onClick={handleClickItem}>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li onClick={handleClickItem}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
