import React from 'react';

import '../../../assets/stylesheets/common.css';

function Button(props) {
  return Button.types[props.type](props);
};

Button.types = {
  link: ({ href, children, className }) => <a href={href} role="link" className={className}>{children}</a>,
  buttonLink: ({ href, children, className }) =>
    <a href={href} role="button" className={className}>
      {children}
    </a>,
}

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  href: React.PropTypes.string,
  callback: React.PropTypes.func,
}

Button.defaultProps = {
  type: 'button',
  callback: () => {},
}

export default Button;
