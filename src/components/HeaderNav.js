import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller, animateScroll } from "react-scroll";

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
    // se já estiver na homepage e clicou no icone de homepage
    if (pathname === '/' && link === '/') { 
      return animateScroll.scrollToTop({ delay: 0})
    }

    navigate('/');

    // se clicou no icone de homepage
    if (link === '/') {
      return animateScroll.scrollToTop({ delay: 0})
    }
    // se clicou em outro icone
    if (link !== '/') {
      setTimeout(() => {
        scroller.scrollTo(link);
      }, 1000);
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
        <Link to={link} onClick={handleScroll}>
          {getImage()}
          {children}
        </Link>
      )}
    </div>
  );
}
