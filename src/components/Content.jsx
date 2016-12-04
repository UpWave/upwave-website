import React from 'react';

class Content extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    registerAnimation: React.PropTypes.func.isRequired,
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
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
        className={`box${this.state.transitionStarted ? ' box-fade-out' : ''} ${this.props.className}`}
      >
        {this.props.children}
      </section>
    );
  }
}

export default Content;
