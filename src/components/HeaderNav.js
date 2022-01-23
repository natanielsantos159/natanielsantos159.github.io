import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

export default function HeaderNav({
  children,
  img,
  imgHover,
  name,
  link,
  scroll,
}) {
  const [hover, setHover] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const getImage = () => (
    <img src={hover ? imgHover : img} alt={`${name} Icon`} />
  );

  const handleScroll = () => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(link);
      }, 2000);
    } else {
      scroller.scrollTo(link, {  delay: 4500, });
    }
  };
  return (
    <div
      className="nav-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {scroll ? (
        <a onClick={handleScroll}>
          {getImage()}
          {children}
        </a>
      ) : (
        <Link to={link}>
          {getImage()}
          {children}
        </Link>
      )}
    </div>
  );
}
