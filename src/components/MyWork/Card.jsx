'use client';

import Aos from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from './Card.module.scss';
import Icon from '../Icon';
import Link from 'next/link';

const Card = ({ img, title, text, stack, left, href, live }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 md:px-28 mb-28 w-full ${styles.card}`}
      data-aos={left ? 'fade-right' : 'fade-left'}
      data-aos-once="true"
    >
      <Image
        src={img}
        alt="work"
        className={`w-full h-auto ${
          left ? 'md:order-1' : 'md:order-2'
        } order-1`}
        width={0}
        height={0}
        sizes="100vw"
      />
      <div
        className={`text-white h-full flex flex-col mt-8 md:mt-0 md:px-10 ${
          left ? 'md:order-2' : 'md:order-1'
        }  order-2`}
      >
        <h3 className="text-2xl font-semibold text-center">{title}</h3>

        <p className="mt-5 mb-10 text-center">{text}</p>

        <div className="flex-center gap-10 mb-10">
          {stack.map((s) => (
            <span className="text-lg font-medium">{s}</span>
          ))}
        </div>

        <div className="flex justify-evenly">
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
    </div>
  );
};

export default Card;
