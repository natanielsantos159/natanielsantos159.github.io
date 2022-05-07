import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import useOnScreen from '../hooks/useOnScreen';
import '../styles/Welcome.css';

export default function Welcome() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'welcome');

  return (
    <section className="welcome-container" ref={ref}>
      <div className="typewriter">
        <h1>Bem-vindo(a) ao meu portfólio!</h1>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-35, 35, -35] }}
        transition={{ type: 'tween', repeat: Infinity, duration: 5 }}>
        <Player
          autoplay={true}
          loop={true}
          controls={true}
          src="https://assets1.lottiefiles.com/packages/lf20_gssu2dkm.json"
        ></Player>
      </motion.div>
    </section>
  );
}
