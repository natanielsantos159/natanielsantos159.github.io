import PropTypes from "prop-types"
import React, { useState } from "react";

export default function ProjectCardButton({
  href = false,
  icon,
  iconHover,
  name,
  className,
  ...onClickProps
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
        onMouseLeave={() => setHover(false)}
      >
        <img src={hover ? iconHover : icon} alt={name} />
        {name}
      </a>
    );
  }

  if (href === false) {
    return (
      <button
        className={`${className} default-btn`}
        {...onClickProps}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={hover ? iconHover : icon} alt={name} />
        {name}
      </button>
    );
  }
}

ProjectCardButton.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  iconHover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
