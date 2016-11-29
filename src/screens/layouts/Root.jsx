import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Root({ children }) {
  return (
    <section>
      <Background />
      {children}
      <Header />
      <Footer />
    </section>
  )
}

export default Root;
