import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import AppContext from '../context/AppContext';
import { motion } from 'framer-motion';

export default function HeaderNav({ children, img, imgHover, name, link }) {
  const [hover, setHover] = useState(false);
  const { onScreen, setOnScreen, isScrollingRef } = useContext(AppContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    setOnScreen(name);
    // se já estiver na homepage e clicou no icone de homepage
    if (pathname === '/' && link === '/') {
      window.scrollTo(0, 0);
    }

    // se não estiver na homepage e clicou um icone qualquer
    const delay = pathname === '/' ? 0 : 700;

    if (pathname !== '/') navigate('/');

    if (link !== '/') {
      // delay para esperar a pagina carregar
      setTimeout(() => {
        isScrollingRef.current = true
        scroller.scrollTo(link, { offset: -60 })
        setTimeout(() => isScrollingRef.current = false, 700)

      }, delay);
    }
  };
  return (
    <div
      className="nav-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a onClick={handleScroll}>
        <img src={hover ? imgHover : img} alt={`${name} Icon`} />
        <span className={`nav-name ${onScreen === name ? 'selected' : ''}`}>{children}</span>
      </a>
      {onScreen === name ? <motion.div className="tab" layoutId="tab" /> : null}
    </div>
  );
}

HeaderNav.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired,
  imgHover: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  scroll: PropTypes.bool.isRequired
};
