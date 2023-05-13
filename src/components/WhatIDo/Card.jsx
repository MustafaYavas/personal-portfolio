import Icon from '../Icon';
import styles from './Card.module.scss';

const Card = ({ icon, title, text }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
      <div
        className={`${styles['card-icon']} flex-center col-span-1 rounded-lg`}
      >
        <Icon name={icon} size={48} color="var(--primary)" />
      </div>
      <div className="col-span-2 md:col-span-5">
        <h3 className="text-white text-xl font-medium">{title}</h3>
        <p style={{ color: 'var(--text-gray)' }} className=" font-medium">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
