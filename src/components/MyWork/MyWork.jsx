import SectionHeader from '../SectionHeader/SectionHeader';
import Card from './Card';
import styles from './MyWork.module.scss';

const MyWork = () => {
  return (
    <section
      id="portfolio"
      className={`min-h-screen flex-center ${styles['my-work-container']}`}
    >
      <div className="main my-10 w-full">
        <SectionHeader text="My Work" subText="portfolio" />

        <div className="mt-10">
          <Card
            img="/assets/images/weather.png"
            title="Weather App"
            text="A weather site that lets users know five-day forecasts. The website provides and interface for 
            searching cities"
            stack={['Next.js', 'SASS']}
            href="https://github.com/MustafaYavas/weather-app"
            live="https://weather-cloudy.vercel.app/"
            left
          />

          <Card
            img="/assets/images/kanban-board.png"
            title="Kanban Board"
            text="It is a tool that allows you to visualize and manage your personal or team projects more easily. 
            You can create your own project or join any of them and you can create new tasks for your project 
            and assign it to a member."
            stack={['React.js', 'CSS']}
            href="https://github.com/MustafaYavas/kanban-board"
          />

          <Card
            img="/assets/images/furniture.png"
            title="Furny"
            text="An e-commerce website where many products are listed in different categories. 
            Users can purchase the products they add to the cart by registering."
            stack={['Next.js', 'SASS']}
            left
            href="https://github.com/MustafaYavas/e-commerce-template"
            live="https://furny.vercel.app/"
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
    </section>
  );
};

export default MyWork;
