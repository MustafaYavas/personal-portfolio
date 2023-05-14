import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillHtml5,
  AiOutlineLink,
} from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { HiComputerDesktop } from 'react-icons/hi2';
import { FaServer } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';

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
  }

  // WHAT I DO
  else if (name === 'AiFillHtml5') {
    return (
      <AiFillHtml5
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'HiComputerDesktop') {
    return (
      <HiComputerDesktop
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'FaServer') {
    return (
      <FaServer
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'BsGit') {
    return (
      <BsGit
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  }

  // MY WORK
  else if (name === 'AiOutlineLink') {
    return (
      <AiOutlineLink
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
