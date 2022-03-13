import React from 'react';
import AnimatedGradient from './src/components/animated-gradient';

const wrapper = ({ element }) => {
  return (
    <>
      {element}
      <AnimatedGradient />
    </>
  );
};

export default wrapper;
