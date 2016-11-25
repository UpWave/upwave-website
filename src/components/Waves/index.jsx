import React from 'react';

import blueWave from '../../assets/images/waves/blueWave.svg';
import redWave from '../../assets/images/waves/redWave.svg';
import blackWave from '../../assets/images/waves/blackWave.svg';
import '../../assets/stylesheets/waves.css';

import SVGWave from './components/SVGWave';

class Waves extends React.Component {
  // componentWillEnter(callback){
  //   console.log('enter');
  // }
  //
  // componentWillLeave(callback) {
  //   console.log('here');
  //   callback();
  // }

  render() {
    return (
      <section className="waves">
        <SVGWave key="blue" svg={blueWave} />
        <SVGWave key="red" svg={redWave} />
        <SVGWave key="black" svg={blackWave} />
      </section>
    );
  }
};

export default Waves;
