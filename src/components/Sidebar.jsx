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
      root: {
        position: 'relative',
        flex: '1',
        minHeight: '100%',
        height: '100%',
      },
      overlay: {
        flex: '1',
        zIndex: 2,
      },
      sidebar: {
        flex: '1',
        background: '#495560',
        zIndex: 3,
      },
      content: {
        position: 'relative',
        flex: '1',
        overflow: 'hidden',
      },
    };
  }

  render() {
    return (
      <ReactSidebar
        sidebar={this.props.sidebar}
        open={this.props.opened}
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
