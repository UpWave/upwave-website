import React from 'react';
import { locationShape } from 'react-router';
import MediaQuery from 'react-responsive';

import HighWaves from '../../components/HighWaves';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import Contact from '../dialogs/Contact';

class Root extends React.Component {
  static propTypes = {
    location: locationShape,
  };

  state = {
    isFromGreeting: false,
    sidebarOpened: false,
  };

  get children() {
    if (!this.props.children) return this.props.children;

    const { isFromGreeting } = this.state;

    return React.cloneElement(this.props.children, {
      isFromGreeting,
      toggleSidebar: this.toggleSidebar.bind(this),
    });
  }

  get pathname() {
    const { pathname } = this.props.location;
    const result = pathname.replace(/\//g, ' ');
    return result === " " ? ' root' : result;
  }

  toggleSidebar(open = null) {
    this.setState({
      sidebarOpened: open === null ? !this.state.sidebarOpened : open,
    });
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
        <Sidebar
          sidebar={
            <MediaQuery query='(min-device-width: 769px)'>
              <Contact toggleSidebar={this.toggleSidebar.bind(this)} />
            </MediaQuery>
          }
          opened={this.state.sidebarOpened}
          onClose={this.toggleSidebar.bind(this)}
        >
          <Header isFromGreeting={isFromGreeting} toggleSidebar={this.toggleSidebar.bind(this)} />
          {this.children}
        </Sidebar>
        <Footer toggleSidebar={this.toggleSidebar.bind(this)}>
          <MediaQuery query='(max-device-width: 768px)'>
            <Contact toggleSidebar={this.toggleSidebar.bind(this)} />
          </MediaQuery>
        </Footer>
        <HighWaves />
        <Background />
      </section>
    );
  }
}

export default Root;
