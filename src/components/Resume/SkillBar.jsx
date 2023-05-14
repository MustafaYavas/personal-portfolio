'use client';

import Aos from 'aos';
import { useEffect } from 'react';

import styles from './SkillBar.module.scss';

const SkillBar = ({ skill, percent, left }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="flex-start flex-col gap-3"
      data-aos={left ? 'fade-right' : 'fade-left'}
      data-aos-once="true"
    >
      <div className="flex-between w-full">
        <label htmlFor="skill" className="text-white">
          {skill}
        </label>
        <span className="text-white">{percent}%</span>
      </div>
      <progress
        className={styles['progress-bar']}
        id="skill"
        value={percent}
        max="100"
      >
        {percent}%
      </progress>
    </div>
  );
};

export default SkillBar;
