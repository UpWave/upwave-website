import React from 'react';
import { locationShape } from 'react-router';

import HighWaves from '../../components/HighWaves';
// import Background from '../../components/Background';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Root extends React.Component {
  static propTypes = {
    location: locationShape,
  };

  state = {
    isFromGreeting: false,
  };

  get children() {
    const { isFromGreeting } = this.state;
    return React.cloneElement(this.props.children, { isFromGreeting });
  }

  get pathname() {
    const { pathname } = this.props.location;
    const result = pathname.replace(/\//g, ' ');
    return result === " " ? ' root' : result;
  }

  componentWillReceiveProps({ location }) {
    const { pathname } = this.props.location;

    if (location.pathname !== pathname && pathname === '/greeting') {
      this.setState({
        isFromGreeting: true,
      });
    }
  }

  render() {
    const { isFromGreeting } = this.state;

    return (
      <section className={`content${this.pathname}`}>
        <Header isFromGreeting={isFromGreeting} />
        {this.children}
        <Footer />
        <HighWaves />
        {/* <Background /> */}
      </section>
    );
  }
}

export default Root;
