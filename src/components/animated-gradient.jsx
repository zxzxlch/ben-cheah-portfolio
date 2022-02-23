import React from 'react';
import { gradient1, gradient2 } from './animated-gradient.module.css';

const AnimatedGradient = () => {
  return (
    <div className="absolute top-0 left-0 -z-50 w-full h-full select-none overflow-hidden">
      <div className={`${gradient1}`}></div>
      <div className={`${gradient2}`}></div>
    </div>
  );
};

export default AnimatedGradient;
