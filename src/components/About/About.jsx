'use client';

import Aos from 'aos';
import { useEffect } from 'react';

import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './About.module.scss';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section
      id="about"
      className={`min-h-screen flex-center ${styles['about-container']}`}
    >
      <div className="my-10">
        <SectionHeader text="Know Me More" subText="about me" />

        <div className="main grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-20 mt-10 md:mt-20">
          <div
            className="col-span-3"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <h2 className="text-3xl text-white font-semibold mb-4">
              I'm
              <span style={{ color: 'var(--primary)' }}> Mustafa Yavaş, </span>a
              Software Developer
            </h2>

            <p style={{ color: 'var(--text-gray-2)' }}>
              If I had to briefly introduce myself...
              <br />I live in Turkey. I went to primary and high school in
              Denizli. Then I continued my education life at Pamukkale
              University. During this time, I had the opportunity to study in
              Poland for a semester. After five years of education, I graduated
              from the Computer Engineering department.
            </p>

            <p style={{ color: 'var(--text-gray-2)' }} className="mt-5">
              My real acquaintance with software took place in my university
              life. In this process, although I learned and interested in many
              different software languages, I developed myself mostly in
              JavaScript. I am currently in the field of Web Development. The
              technologies I use the most are React.js, Next.js and Node.js. I
              have developed many different projects to improve myself in this
              field.
            </p>
          </div>

          <div
            className="text-white col-span-2 "
            data-aos="fade-left"
            data-aos-once="true"
          >
            <p className="py-3 border-b border-gray-600">
              <span className="font-semibold mr-2">Name:</span>
              <span>Mustafa Yavaş</span>
            </p>

            <p className="py-3 border-b border-gray-600">
              <span className="font-semibold mr-2">Email:</span>
              <a
                style={{ color: 'var(--primary)' }}
                href="mailto:mustafayavas40@gmail.com"
              >
                mustafayavas40@gmail.com
              </a>
            </p>

            <p className="py-3 border-b border-gray-600">
              <span className="font-semibold mr-2">Age:</span>
              <span>24</span>
            </p>

            <p className="py-3 mb-5">
              <span className="font-semibold mr-2">From:</span>
              <span>Denizli, Turkey</span>
            </p>

            <Button text="Download CV" primary fill link href="/files/cv.pdf" />
          </div>
        </div>

        <div
          className="flex justify-center items-center gap-10 main mt-20"
          style={{ color: 'var(--text-gray-2)' }}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="text-center border-r border-gray-600 pr-10">
            <h4 className="text-3xl md:text-5xl">2+</h4>
            <p>Years Experience</p>
          </div>

          <div className="text-center">
            <h4 className="text-3xl md:text-5xl">10+</h4>
            <p>Projects Done</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
