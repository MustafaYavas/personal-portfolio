import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Icon = ({ name, className, size, color }) => {
  // NAVBAR
  if (name === 'AiFillLinkedin') {
    return (
      <AiFillLinkedin
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'AiFillGithub') {
    return (
      <AiFillGithub
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else {
    return null;
  }
};

export default Icon;
