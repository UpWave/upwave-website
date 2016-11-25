import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';
// import Footer from '../../components/Footer';

function Root({ children, location }) {
  return (
    <section>
      <Background />
      {children}
      <Header location={location} />
      {/* <Footer /> */}
    </section>
  )
}

Root.propTypes = {
  location: React.PropTypes.object,
};

export default Root;
