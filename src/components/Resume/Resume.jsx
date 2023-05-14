import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import Card from './Card';
import styles from './Resume.module.scss';
import SkillBar from './SkillBar';

const Resume = () => {
  return (
    <section
      className={`min-h-screen flex-center ${styles['resume-container']}`}
    >
      <div className="main my-10 w-full">
        <SectionHeader text="Resume" subText="summary" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-5">
              My Education
            </h2>

            <Card
              year="2017 - 2022"
              title="Bachelor Degree"
              subTitle="Pamukkale University"
              className="mb-5"
            />
            <Card
              year="2021 - 2021"
              title="Erasmus +"
              subTitle="Czestochowa University of Technology"
              className="mb-5"
            />
            <Card
              year="2013 - 2017"
              title="High school"
              subTitle="Denizli High School"
              className="mb-5"
            />
          </div>

          <div>
            <h2 className="text-white text-2xl font-semibold mb-5">
              My Experience
            </h2>

            <Card
              year="2022 - Current"
              title="Retable"
              subTitle="Frontend Developer"
              className="mb-5"
            />
            <Card
              year="2022"
              title="Milda Health"
              subTitle="Web Developer"
              className="mb-5"
            />
          </div>
        </div>

        <div className="mt-10 mb-5">
          <h2 className="text-white text-2xl font-semibold mb-5">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SkillBar skill="HTML / CS" percent="90" />
            <SkillBar skill="JavaScript / TypeScript" percent="90" />

            <SkillBar skill="Node.js" percent="70" />
            <SkillBar skill="React.js" percent="85" />
            <SkillBar skill="Next.js" percent="70" />
            <SkillBar skill="Java" percent="50" />
          </div>
        </div>

        <div className="mt-20 mb-10 text-center">
          <Button text="Download CV" link href="/files/cv.pdf" />
        </div>
      </div>
    </section>
  );
};

export default Resume;
