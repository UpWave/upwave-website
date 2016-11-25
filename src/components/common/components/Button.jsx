import React from 'react';
import { Link } from 'react-router';

import '../../../assets/stylesheets/common.css';

function Button(props) {
  return Button.types[props.type](props);
};

// TODO: Refactor dat shit
Button.types = {
  link: ({ href, children, className }) => <Link to={href} role="link" className={className}>{children}</Link>,
  buttonLink: ({ href, children, className }) =>
    <Link to={href} role="button" className={className}>
      {children}
    </Link>,
  externalButtonLink: ({ href, children, className }) =>
    <a href={href} role='button' className={className}>
      {children}
    </a>
}

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  href: React.PropTypes.string,
  callback: React.PropTypes.func,
  external: React.PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  callback: () => {},
}

export default Button;
