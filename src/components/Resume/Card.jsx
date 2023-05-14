import styles from './Card.module.scss';

const Card = ({ year, title, subTitle, text, className }) => {
  return (
    <div className={`${className} ${styles['card']}`}>
      <p className={styles['year']}>{year}</p>
      <h2 className={styles['title']}>{title}</h2>
      <h3 className={styles['sub-title']}>{subTitle}</h3>

      {text && <p className={styles['text']}>{text}</p>}
    </div>
  );
};

export default Card;
