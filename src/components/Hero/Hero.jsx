import Button from '../Button/Button';
import TypeWriter from '../TypeWriter';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={`h-screen flex-center ${styles.hero}`}>
      <video className="videoTag" autoPlay loop muted>
        <source src="/assets/videos/video.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h3 className="text-3xl font-medium">Welcome</h3>
        <TypeWriter
          data={["I'm Mustafa Yavaş", 1000, "I'm a Software Developer", 1000]}
        />
        <h3 className="text-xl font-medium text-zinc-300 mb-10">
          based in Denizli, Turkey
        </h3>

        <Button text="Hire Me" primary />
      </div>
    </section>
  );
};

export default Hero;
