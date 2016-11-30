import React from 'react';

class Content extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    registerAnimation: React.PropTypes.func.isRequired,
  };

  timeout = 0;

  state = {
    transitionStarted: false,
  };

  componentDidMount() {
    this.props.registerAnimation(this.props.name, this.transitionShouldStart);
  }

  // TODO: Make a prop
  transitionShouldStart = routerCallback => {
    this.setState({
      transitionStarted: true,
    }, () => this.timeout = setTimeout(() => routerCallback(this.props.name), 500));
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <section
        className={`container ${this.state.transitionStarted ? 'container-fade-out' : ''}`}
      >
        <section className="motto">
          {this.props.children}
        </section>
      </section>
    );
  }
}

export default Content;
