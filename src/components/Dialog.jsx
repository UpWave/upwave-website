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

  setMainDisplay(value) {
    window.document.querySelector('.header').style.display = value;
    window.document.querySelector('.box').style.display = value;
    window.document.querySelector('.footer').style.display = value;
  }

  componentWillUnmount() {
    this.setMainDisplay('flex');
  }

  closeDialog() {
    this.setMainDisplay('flex');

    this.setState({
      fadeOut: true,
    }, () => setTimeout(
      () => browserHistory.push('/careers'),
      500,
    ));
  }

  render() {
    return (
      <section id="dialogs">
        <ReactModal
          isOpen={true}
          onAfterOpen={() => {
            window.setTimeout(
              () => {
                this.setMainDisplay('none');
              },
              500
            );
          }}
          contentLabel="Career Modal"
          portalClassName="dialogs-portal"
          overlayClassName={`dialogs-overlay ${this.state.fadeOut ? 'dialog-fade-out' : ''}`}
          className={`dialogs-content ${this.props.className}`}
          ariaHideApp={true}
          shouldCloseOnOverlayClick={false}
          role="dialog"
          parentSelector={() => window.document.getElementById('dialogs')}
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
      </section>
    );
  }
}

export default Dialog;
