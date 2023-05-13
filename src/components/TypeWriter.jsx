'use client';

import { TypeAnimation } from 'react-type-animation';

const TypeWriter = ({ data }) => {
  return (
    <TypeAnimation
      sequence={data}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
      deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 100 }}
      style={{ display: 'inline-block' }}
      className="font-semibold my-5 text-3xl md:text-5xl"
    />
  );
};

export default TypeWriter;
