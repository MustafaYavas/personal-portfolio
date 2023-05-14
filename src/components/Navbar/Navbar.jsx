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
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#do">What I Do</Link>
        </li>
        <li>
          <Link href="#resume">Resume</Link>
        </li>
        <li>
          <Link href="#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
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
