import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class SVGElement extends React.Component {
  static propTypes = {
    svg: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "",
  };

  componentDidMount() {
    let svgElement = ReactDOM.findDOMNode(this.refs.svgElement);
    svgElement.innerHTML = this.props.svg;
  }

  render() {
    return (
      <section ref="svgElement" className={this.props.className} />
    );
  }
}

export default SVGElement;
