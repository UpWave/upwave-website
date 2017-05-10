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
        overflowX: 'hidden',
        overflowY: 'auto',
      },
      content: {
        overflowX: 'hidden',
        overflowY: 'auto',
      }
    };
  }

  render() {
    return (
      <ReactSidebar
        sidebar={this.props.sidebar}
        docked={this.props.opened}
        transitions={true}
        pullRight={true}
        styles={this.styles}
        shadow={false}
        contentClassName="sidebar-wrapper"
      >
        {this.props.children}
      </ReactSidebar>
    );
  }
}

export default Sidebar;
