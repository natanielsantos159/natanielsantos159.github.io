import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function DefaultButton({
  href = false,
  icon,
  iconHover,
  name,
  className = '',
  ...props
}) {
  const [hover, setHover] = useState(false);

  if (href) {
    return (
      <a
        href={href}
        className={`${className} default-btn`}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        {icon && <img src={hover ? iconHover : icon} alt={name} />}
        {name}
      </a>
    );
  }

  if (href === false) {
    return (
      <button
        className={`${className} default-btn`}
        {...props}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        {icon && <img src={hover ? iconHover : icon} alt={name} />}
        {name}
      </button>
    );
  }
}

DefaultButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.bool,
  icon: PropTypes.string,
  iconHover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
