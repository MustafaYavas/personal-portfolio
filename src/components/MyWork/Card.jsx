'use client';

import Aos from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Card.module.scss';
import Icon from '../Icon';

const Card = ({ img, title, text, stack, href, live }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Link
      href={href}
      className={styles.card}
      data-aos="fade-up"
      data-aos-once="true"
      style={{
        width: '425px',
        height: '100%',
      }}
      target="_blank"
    >
      <Image
        src={img}
        alt="work"
        className="w-full h-auto"
        width={0}
        height={0}
        sizes="100vw"
      />

      <div
        className={`text-white h-full w-full flex flex-col ${styles['card-text']}`}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          {title}
        </h3>

        <p className="my-2 md:my-5 text-center hidden md:block md:text-lg">
          {text}
        </p>

        <div className="flex-center gap-10 mb-2 md:mb-5">
          {stack.map((s) => (
            <span key={s} className="md:text-lg text-base font-medium">
              {s}
            </span>
          ))}
        </div>

        <div className="flex justify-evenly gap-10">
          <Link href={href} target="_blank" className="flex-center gap-2">
            Code <Icon name="AiFillGithub" size="28" color="white" />
          </Link>

          {live && (
            <Link href={live} target="_blank" className="flex-center gap-2">
              Live <Icon name="AiOutlineLink" size="28" color="white" />
            </Link>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
