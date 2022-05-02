import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import '../styles/Welcome.css';

export default function Welcome() {
  return (
    <section className="welcome-container">
      <div className="typewriter">
        <h1>Bem-vindo(a) ao meu portifólio!</h1>
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
          style={{ height: '65vh' }}></Player>
      </motion.div>
    </section>
  );
}
