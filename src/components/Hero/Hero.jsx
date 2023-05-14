import Button from '../Button/Button';
import Icon from '../Icon';
import TypeWriter from '../TypeWriter';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section id="home" className={`min-h-screen flex-center ${styles.hero}`}>
      <video className="videoTag" autoPlay loop muted>
        <source src="/assets/videos/video.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h3 className="text-2xl md:text-3xl font-medium">Welcome</h3>
        <TypeWriter
          data={["I'm Mustafa Yavaş", 1000, "I'm a Software Developer", 1000]}
        />
        <h3 className="text-lg md:text-xl font-medium text-zinc-300 mb-10">
          based in Denizli, Turkey
        </h3>

        <Button text="Hire Me" primary link href="#contact" />

        <Icon
          className={styles['scroll-arrow']}
          name="IoIosArrowDown"
          size="32"
          color="white"
        />
      </div>
    </section>
  );
};

export default Hero;
