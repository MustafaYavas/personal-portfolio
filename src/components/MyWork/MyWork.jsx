import Link from 'next/link';
import SectionHeader from '../SectionHeader/SectionHeader';
import Card from './Card';
import styles from './MyWork.module.scss';

const MyWork = () => {
  return (
    <section
      id="portfolio"
      className={`min-h-screen flex-center ${styles['my-work-container']}`}
    >
      <div className="mt-10 mb-20 w-full">
        <SectionHeader text="My Work" subText="portfolio" />

        <div className="mt-10 md:mt-20 px-20 md:px-0">
          <p className="text-center mt-5 text-lg font-medium text-white">
            Some of my works are listed below. You can see more on my{' '}
            <Link
              href="https://github.com/MustafaYavas"
              target="_blank"
              className={styles.link}
            >
              GitHub
            </Link>{' '}
            profile.
          </p>

          <div
            className="mt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-2 
            justify-items-center items-center gap-5"
          >
            <Card
              img="/assets/images/weather.png"
              title="Cloudy"
              text="A weather site that lets users know five-day forecasts. The website provides and interface for 
                searching cities"
              stack={['Next.js', 'SASS']}
              href="https://github.com/MustafaYavas/weather-app"
              live="https://weather-cloudy.vercel.app/"
            />

            <div className="row-span-2 h-full">
              <Card
                img="/assets/images/furny.png"
                title="Furny"
                text="An e-commerce website where many products are listed in different categories. 
                Users can purchase the products they add to the cart by registering."
                stack={['Next.js', 'SASS']}
                href="https://github.com/MustafaYavas/e-commerce-template"
                live="https://furny.vercel.app/"
              />
            </div>

            <Card
              img="/assets/images/mobees.png"
              title="Mobess"
              text="A React.js application that lists movies from different categories"
              stack={['React.js', 'SASS']}
              href="https://github.com/MustafaYavas/movies-app"
              live="https://mobees.vercel.app/"
            />

            <Card
              img="/assets/images/kanban-board.png"
              title="Kanban Board"
              text="It is a tool that allows you to visualize and manage your personal or team projects more easily. 
              You can create a new one or join and you can create new tasks and assign it."
              stack={['React.js', 'CSS']}
              href="https://github.com/MustafaYavas/kanban-board"
            />

            <Card
              img="/assets/images/conword.png"
              title="ConWord"
              text="A tool for converting Word files to PDF. It accepts .doc and .docx files only"
              stack={['React.js', 'CSS']}
              href="https://github.com/MustafaYavas/ConWord"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
