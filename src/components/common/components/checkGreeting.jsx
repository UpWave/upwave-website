import React from 'react';
import { browserHistory } from 'react-router';

function checkGreeting(WrappedComponent) {
  function getCook(cookieName) {
    var cookiestring = RegExp('' + cookieName + '[^;]+').exec(document.cookie);

    return decodeURI(
      !!cookiestring ? cookiestring.toString().replace(/^[^=]+./,'') : '',
    );
  }

  function setCook(name, value, hours = 24){
      let expires = '';
      let date = new Date();

      if (hours) {
          date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
          expires = "; expires=" + date.toGMTString();
      }

      document.cookie = name + "=" + value + expires + "; path=/";
  }

  return class extends React.Component {
    componentWillMount() {
      if (this.isGreeting) {
        browserHistory.push('/greeting');
      }
    }

    get isGreeting() {
      return !getCook('greeting');
    }

    render() {
      if (this.isGreeting) {
        setCook('greeting', 'done', 24);
        return null;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  }
}

export default checkGreeting;
