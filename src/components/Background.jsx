import React from 'react';

import background from '../assets/images/background.svg';
import '../assets/stylesheets/background.css';

function Background() {
  return <img src={background} role="presentation" className="background" />;
};

export default Background;
