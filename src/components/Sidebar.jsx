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
        position: 'static',
        display: 'flex',
        flex: '1',
        minHeight: '100vh',
      },
      overlay: {
        zIndex: 2,
      },
      sidebar: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        background: 'rgba(44, 72, 96, .93)',
        boxShadow: '0 0 20px rgba(0, 0, 0, .3)',
        zIndex: 5,
      },
      content: {
        position: 'static',
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        overflowY: 'visible',
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
        shadow={true}
        touch={false}
        rootClassName={this.props.opened ? 'sidebar-opened' : ''}
        contentClassName="sidebar-wrapper"
      >
        {this.props.children}
      </ReactSidebar>
    );
  }
}

export default Sidebar;
