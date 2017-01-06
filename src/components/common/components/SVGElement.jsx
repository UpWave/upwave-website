import React from 'react';
import ReactDOM from 'react-dom';

class SVGElement extends React.Component {
  static propTypes = {
    svg: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
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
