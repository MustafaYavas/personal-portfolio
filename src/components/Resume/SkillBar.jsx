import styles from './SkillBar.module.scss';

const SkillBar = ({ skill, percent }) => {
  return (
    <div className="flex-start flex-col gap-3">
      <div className="flex-between w-full">
        <label htmlFor="skill" className="text-white">
          {skill}
        </label>
        <span className="text-white">{percent}%</span>
      </div>
      <progress
        className={styles['progress-bar']}
        id="skill"
        value={percent}
        max="100"
      >
        {percent}%
      </progress>
    </div>
  );
};

export default SkillBar;
