import styles from './SectionHeader.module.scss';

const SectionHeader = ({ text, subText }) => {
  return (
    <div className={`relative text-center ${styles['section-header']}`}>
      <h3>{subText.toUpperCase()}</h3>
      <p className="text-white absolute">{text}</p>
      <span className={styles['heading-seperator']}></span>
    </div>
  );
};

export default SectionHeader;
