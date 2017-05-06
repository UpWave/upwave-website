import React from 'react';
import PropTypes from 'prop-types';
import ReactScrollbar from 'react-scrollbar';

class Scrollbar extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <ReactScrollbar>
        {this.props.children}
      </ReactScrollbar>
    );
  }
}

export default Scrollbar;
