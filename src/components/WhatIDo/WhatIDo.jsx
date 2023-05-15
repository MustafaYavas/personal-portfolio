import SectionHeader from '../SectionHeader/SectionHeader';
import Card from './Card';
import styles from './WhatIDo.module.scss';

const WhatIDo = () => {
  return (
    <section
      id="do"
      className={`min-h-screen flex-center ${styles['whatido-container']}`}
    >
      <div className="my-10">
        <SectionHeader text="What I Do?" subText="services" />

        <div className="main grid grid-cols-1 min-[992px]:grid-cols-2 gap-16 mt-10 md:mt-20">
          <Card
            icon="AiFillHtml5"
            title="Frontend Development"
            text="I develop software in this field using technologies such as React.js, Next.js. 
            While doing this, I use frameworks such as Tailwind, Bootstrap."
          />

          <Card
            icon="HiComputerDesktop"
            title="Backend Development"
            text="I use technologies such as Node.js, Express.js to create servers for use in projects."
          />

          <Card
            icon="FaServer"
            title="Database Management"
            text="I create databases to use in my projects. I usually use MongoDB to accomplish this."
          />

          <Card
            icon="BsGit"
            title="Version Control"
            text="I heavily use Git and GitHub to manage my projects."
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
