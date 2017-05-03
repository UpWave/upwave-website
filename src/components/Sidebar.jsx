import React from 'react';
import PropTypes from 'prop-types';
import ReactSidebar from 'react-sidebar';

class Sidebar extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sidebar: PropTypes.node.isRequired,
    opened: PropTypes.bool.isRequired,
  };

  get styles() {
    return {
      sidebar: {
        background: '#495560',
        zIndex: 333,
      },
    };
  }

  render() {
    return (
      <ReactSidebar
        sidebar={this.props.sidebar}
        transitions={true}
        pullRight={true}
        docked={this.props.opened}
        styles={this.styles}
        shadow={false}
      >
        {this.props.children}
      </ReactSidebar>
    );
  }
}

export default Sidebar;
