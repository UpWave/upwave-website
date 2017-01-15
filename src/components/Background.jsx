import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/background.css';

class Background extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  }

  componentDidMount() {
    /*eslint no-undef: 0*/
    window.particleground(ReactDOM.findDOMNode(this.refs.particles));
  }

  render() {
    const { className } = this.props;

    return (
      <section
        className={`background${className ? ` ${className}` : ''}`}
        ref="particles"
      />
    );
  }
};

export default Background;
