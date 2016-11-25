import React from 'react';

import blueWave from '../../assets/images/waves/blueWave.svg';
import redWave from '../../assets/images/waves/redWave.svg';
import blackWave from '../../assets/images/waves/blackWave.svg';
import '../../assets/stylesheets/waves.css';

import SVGWave from './components/SVGWave';

function Waves() {
  return (
    <section className="waves">
      <SVGWave svg={blueWave} />
      <SVGWave svg={redWave} />
      <SVGWave svg={blackWave} />
    </section>
  );
};

export default Waves;
