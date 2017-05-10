import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/common/components/Button';

import '../../assets/stylesheets/contact.css';

class Contact extends React.Component {
  static CONTACT_ENDPOINT = 'https://upwave-service.herokuapp.com/website_api/v1/contacts';

  static propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
  };

  state = {
    data: {
      email: '',
      subject: '',
      message: '',
    },
    errors: {},
    successMessage: '',
    isFetching: false,
  };

  handleSubmit(e) {
    e.preventDefault();

    const reCAPTCHAToken = window.grecaptcha.getResponse();

    if (reCAPTCHAToken) {
      const {
        email,
        subject,
        message,
      } = this.state;

      fetch(Contact.CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contact: {
            email,
            subject,
            message,
          },
          reCAPTCHA: reCAPTCHAToken,
        }),
      }).then(response => {
        if (response.ok) {
          this.setState({
            errors: {},
            successMessage: 'Thank you for your request. We will contact you really soon!',
          });

          setTimeout(() => this.setState({ successMessage: '' }), 10000);
        }

        return response.json();
      }).then(data => {
        this.setState(data);

        this.setState({
          isFetching: false,
        });
      });

      this.setState({
        isFetching: true,
      });

      window.grecaptcha.reset();
    } else {
      window.grecaptcha.execute();
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      errors,
      isFetching,
      successMessage,
    } = this.state;

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
                type='text'
                className={errors.email ? "in-error" : ""}
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                placeholder="Your email." />
              { errors.email ? <span className="field-error">{errors.email}</span> : null }
              <input
                type='text'
                className={errors.subject ? "in-error" : ""}
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange.bind(this)}
                placeholder="Your subject." />
              { errors.subject ? <span className="field-error">{errors.subject}</span> : null }
              <textarea
                name="message"
                className={errors.message ? "in-error" : ""}
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                placeholder="Tell us a little about yourself and how we can help you."></textarea>
              { errors.message ? <span className="field-error">{errors.message}</span> : null }
              { successMessage ? <p className="form-notice">{successMessage}</p> : null }
              <span className="form-buttons">
                <span className={`submit-button-wrapper${isFetching ? ' loading' : ''}`}>
                  <input
                    type='submit'
                    className="submit-button"
                    value="Submit" />
                </span>
                <span className='divider'>or</span>
                <Button
                  type="externalButtonLink"
                  href={`mailto:contact@upwave.net?subject=${this.state.subject || ''}&body=${this.state.message || ''}`}
                  className="nav-button"
                >
                  Via email
                </Button>
              </span>
              { errors.reCAPTCHA ? <span className="field-error">{errors.reCAPTCHA}</span> : null }
              <div
                className="g-recaptcha"
                data-sitekey='6Lfrkx8UAAAAAESxHoO38NQYMpnl_yd4FJ8SGMfI'
                data-callback="onReCAPTCHA"
                data-size="invisible">
              </div>
            </form>
          </section>
          {/* <section className='contact-map'>
            <h2>We are here</h2>
            <iframe
              className='google-map'
              src="https://www.google.com/maps/embed/v1/place?q=Akademika+Andriya+Sakharova+St,+35,+L'viv,+Lviv+Oblast&zoom=17&key=AIzaSyAoef4tUtPuY5nETIb-8oA-2GDhH6R2dKo"
            ></iframe>
          </section> */}
        </section>
    );
  }
}

export default Contact;
