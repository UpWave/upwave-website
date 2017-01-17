import React from 'react';
import { locationShape } from 'react-router';

import Background from '../../components/Background';
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
    return pathname.replace(/\//g, ' ');
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
      <section className="content">
        <Header
          className={this.pathname}
          isFromGreeting={isFromGreeting}
        />
        {this.children}
        <Footer
          className={this.pathname}
          isFromGreeting={isFromGreeting}
        />
        <Background
          className={this.pathname}
          isFromGreeting={isFromGreeting}
        />
      </section>
    );
  }
}

export default Root;
