import styles from './Button.module.scss';

const Button = ({ text, color, primary, fill }) => {
  const cssClass = fill
    ? primary
      ? 'button-primary-fill'
      : 'button-secondary-fill'
    : primary
    ? 'button-primary'
    : 'button-secondary';

  return (
    <button
      className={`${styles[cssClass]} rounded-3xl px-10 py-3 font-semibold delay-100`}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
