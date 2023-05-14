import styles from './Button.module.scss';

const Button = ({ text, color, primary, fill, link, href, type, onClick }) => {
  const cssClass = fill
    ? primary
      ? 'button-primary-fill'
      : 'button-secondary-fill'
    : primary
    ? 'button-primary'
    : 'button-secondary';

  return (
    <>
      {link ? (
        <a
          className={`${styles[cssClass]} rounded-3xl px-10 py-3 font-semibold delay-100`}
          style={{ backgroundColor: color }}
          href={href}
        >
          {text}
        </a>
      ) : (
        <button
          className={`${styles[cssClass]} rounded-3xl px-10 py-3 font-semibold delay-100`}
          style={{ backgroundColor: color }}
          type={type ? type : 'button'}
          onClick={onClick ? onClick : null}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
