import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderNav({ children, img, imgHover, name, link }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="nav-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={link}>
        <img src={hover ? imgHover : img} alt={`${name} Icon`} />
        {children}
      </Link>
    </div>
  );
}
