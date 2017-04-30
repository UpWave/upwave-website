import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

import '../../../assets/stylesheets/common.css';

function Button(props) {
  return Button.types[props.type](props);
}

// TODO: Refactor dat shit
Button.types = {
  link: ({ href, children, className, id }) => (
    <Link
      id={id}
      to={href}
      role="link"
      className={className}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </Link>
  ),
  button: ({ callback, className, children, id }) => (
    <a id={id} role='button' onClick={callback} className={className}>
      {children}
    </a>
  ),
  buttonLink: ({ href, children, className, id }) => (
    <Link
      id={id}
      to={href}
      role="button"
      className={className}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </Link>
  ),
  externalButtonLink: ({ href, children, className, id }) => (
    <a
      id={id}
      href={href}
      role='button'
      className={className}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </a>
  ),
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  href: PropTypes.string,
  callback: PropTypes.func,
  className: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  className: '',
  callback: () => {},
}

export default Button;
