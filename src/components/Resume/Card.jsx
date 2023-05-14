'use client';

import Aos from 'aos';
import { useEffect } from 'react';

import styles from './Card.module.scss';

const Card = ({ year, title, subTitle, text, className, left }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className={`${className} ${styles['card']}`}
      data-aos={left ? 'fade-right' : 'fade-left'}
      data-aos-once="true"
    >
      <p className={styles['year']}>{year}</p>
      <h2 className={styles['title']}>{title}</h2>
      <h3 className={styles['sub-title']}>{subTitle}</h3>

      {text && <p className={styles['text']}>{text}</p>}
    </div>
  );
};

export default Card;
