import React from 'react';
import PropTypes from 'prop-types';
import ReactScrollbar from 'react-custom-scrollbars';

class Scrollbar extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <ReactScrollbar
        universal
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{ width: '100%', height: '100%' }}
      >
        {this.props.children}
      </ReactScrollbar>
    );
  }
}

export default Scrollbar;
