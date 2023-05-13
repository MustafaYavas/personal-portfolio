import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

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
  } else if (name === 'IoIosArrowDown') {
    return (
      <IoIosArrowDown
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
