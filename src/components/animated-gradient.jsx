import React, { useState } from 'react';
import useScrollPosition from '../utils/useScrollPosition';
import { gradient1, gradient2 } from './animated-gradient.module.css';

const AnimatedGradient = () => {
  const [squashed, setSquashed] = useState(false);

  useScrollPosition(
    ({ currPos: { y } }) => {
      const viewportPercent = y / window.innerHeight;
      setSquashed(viewportPercent > 0.2);
    },
    null,
    null,
    true,
  );

  const transform = squashed ? 'scale(2) translate(-10%, -25%)' : 'none';
  console.log(`squashed=${squashed}`);

  return (
    <div
      className="fixed top-0 left-0 -z-50 w-full h-full select-none overflow-hidden origin-top-left transition-transform duration-[5000ms]"
      style={{ transform }}
    >
      <div className={gradient1}></div>
      <div className={gradient2}></div>
    </div>
  );
};

export default AnimatedGradient;
