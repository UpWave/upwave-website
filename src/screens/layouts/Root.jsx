import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Root({ children, location: { pathname } }) {
  return (
    <section className="content">
      <Header />
      <section className="container">
        {children}
      </section>
      <Footer className={pathname} />
      <Background />
    </section>
  )
}

export default Root;
