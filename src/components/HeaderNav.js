import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import AppContext from "../context/AppContext";

export default function HeaderNav({
  children,
  img,
  imgHover,
  name,
  link,
}) {
  const [hover, setHover] = useState(false);
  const { onScreen } = useContext(AppContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const getImage = () => (
    <img src={hover ? imgHover : img} alt={`${name} Icon`} />
  );

  const handleScroll = () => {
    // se já estiver na homepage e clicou no icone de homepage
    if (pathname === "/" && link === "/") {
      window.scrollTo(0, 0);
    }

    if (pathname !== "/" && link === "/") navigate("/");

    // se clicou em outro icone
    if (link !== "/") {
      scroller.scrollTo(link);
    }
  };
  return (
    <div
      className={`nav-wrapper ${onScreen === name ? "active" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a onClick={handleScroll}>
        {getImage()}
        {children}
      </a>
    </div>
  );
}

HeaderNav.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired,
  imgHover: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  scroll: PropTypes.bool.isRequired,
};
