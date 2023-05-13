import { useState } from 'react';

import styles from './Menu.module.scss';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col">
      <div
        onClick={handleShowMenu}
        className={`flex lg:hidden ${styles['menu-btn']} ${
          showMenu ? styles.open : ''
        }`}
      >
        <div className={`${styles['menu-btn-burger']}`}></div>
      </div>

      {showMenu && (
        <ul className={`block lg:hidden ${styles['nav-menu']}`}>
          <li className="border-b border-gray-600">Home</li>
          <li className="border-b border-gray-600">About</li>
          <li className="border-b border-gray-600">What I Do</li>
          <li className="border-b border-gray-600">Resume</li>
          <li className="border-b border-gray-600">Portfolio</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
