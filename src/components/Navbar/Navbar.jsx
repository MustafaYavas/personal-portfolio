'use client';

import { useEffect, useState } from 'react';
import Icon from '../Icon';
import Menu from './Menu';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset > 50 ? true : false);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <header
      className={`px-3 flex-between text-white ${styles['header-container']} ${
        isScrolled ? 'bg-zinc-900' : 'bg-transparent'
      }`}
    >
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={48}
          height={48}
        />
      </Link>

      <ul className={`flex-center gap-8 font-medium ${styles['nav-link']}`}>
        <li>Home</li>
        <li>About</li>
        <li>What I Do</li>
        <li>Resume</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      <div className="flex-center gap-5">
        <Menu />
        <Link
          href="https://www.linkedin.com/in/mustafa-yava%C5%9F-936431199/"
          target="_blank"
        >
          <Icon
            name="AiFillLinkedin"
            className="cursor-pointer linkedIn-link"
            size="22"
            color="white"
          />
        </Link>
        <Link href="https://github.com/MustafaYavas" target="_blank">
          <Icon
            name="AiFillGithub"
            className="cursor-pointer github-link"
            size="22"
            color="white"
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
