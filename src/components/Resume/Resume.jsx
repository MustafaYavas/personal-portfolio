import SectionHeader from '../SectionHeader/SectionHeader';
import Card from './Card';
import styles from './Resume.module.scss';

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
      </div>
    </section>
  );
};

export default Resume;
