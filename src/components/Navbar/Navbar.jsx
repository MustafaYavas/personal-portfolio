import Icon from '../Icon';
import Menu from './Menu';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header
      className={`px-3 flex-between text-white ${styles['header-container']}`}
    >
      <h1 className="text-xl md:text-3xl font-semibold">Mustafa</h1>

      <ul className={`flex-center gap-8 font-medium ${styles['nav-link']}`}>
        <li>Home</li>
        <li>About</li>
        <li>What I Do</li>
        <li>Resume</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      <div className="flex-center gap-5">
        <Menu />
        <Icon
          name="AiFillLinkedin"
          className="cursor-pointer linkedIn-link"
          size="22"
          color="white"
        />
        <Icon
          name="AiFillGithub"
          className="cursor-pointer github-link"
          size="22"
          color="white"
        />
      </div>
    </header>
  );
};

export default Navbar;
