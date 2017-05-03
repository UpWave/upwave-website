import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import { browserHistory } from 'react-router';

import Button from './common/components/Button';

import '../assets/stylesheets/dialogs.css';
import logo from '../assets/images/logo.svg';

class Dialog extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    fadeOut: false,
  };

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
  }

  closeDialog() {
    this.setState({
      fadeOut: true,
    }, () => setTimeout(
      () => browserHistory.push('/careers'),
      500
    ));
  }

  render() {
    return (
      <ReactModal
        isOpen={true}
        onAfterOpen={() => document.body.style.overflow = 'hidden'}
        contentLabel="Career Modal"
        portalClassName="dialogs-portal"
        overlayClassName={`dialogs-overlay ${this.state.fadeOut ? 'dialog-fade-out' : ''}`}
        className={`dialogs-content ${this.props.className}`}
        ariaHideApp={true}
        shouldCloseOnOverlayClick={false}
        role="dialog"
        parentSelector={() => document.getElementById('dialogs')}
      >
        <Button type="link" href="/" className="logo-button">
          <img src={logo} alt="UpWave logo" className="logo" />
        </Button>
        <Button
          className="dialogs-close-button"
          callback={this.closeDialog.bind(this)}
          type="button"
        ></Button>
        {this.props.children}
      </ReactModal>
    );
  }
}

export default Dialog;
