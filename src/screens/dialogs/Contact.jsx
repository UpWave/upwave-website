import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/common/components/Button';

import '../../assets/stylesheets/contact.css';

class Contact extends React.Component {
  static propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    subject: '',
    content: '',
  };

  handleSubmit(e) {
    e.preventDefault();

    console.log(e.nativeEvent.recaptcha);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
        <section className='contact-bar'>
          <Button
            className="sidebar-close-button"
            callback={() => this.props.toggleSidebar(false)}
            type="button"
          ></Button>
          <section className='contact-form'>
            <h2>Contact us</h2>
            <form id='contact-us' onSubmit={this.handleSubmit.bind(this)}>
              <input
                type='email'
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                placeholder="Your email." />
              <input
                type='text'
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange.bind(this)}
                placeholder="Your subject." />
              <textarea
                name="content"
                value={this.state.content}
                onChange={this.handleChange.bind(this)}
                placeholder="Tell us a little about yourself and how we can help you."></textarea>
              <span className="form-buttons">
                <input
                type='submit'
                className='g-recaptcha'
                data-sitekey='6Lfrkx8UAAAAAESxHoO38NQYMpnl_yd4FJ8SGMfI'
                data-callback="onReCAPTCHA"
                data-badge="inline"
                value='Submit' />
                <span className='divider'>or</span>
                <Button
                  type="externalButtonLink"
                  href={`mailto:contact@upwave.net?subject=${this.state.subject}&body=${this.state.content}`}
                  className="nav-button"
                >
                  Via email
                </Button>
              </span>
            </form>
          </section>
          <section className='contact-map'>
            <h2>We are here</h2>
            <iframe
              className='google-map'
              src="https://www.google.com/maps/embed/v1/place?q=Akademika+Andriya+Sakharova+St,+35,+L'viv,+Lviv+Oblast&zoom=17&key=AIzaSyAoef4tUtPuY5nETIb-8oA-2GDhH6R2dKo"
            ></iframe>
          </section>
        </section>
    );
  }
}

export default Contact;
