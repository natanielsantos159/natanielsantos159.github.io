import React from 'react';
import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';

export default function SwitchViewButton({ onClick, icon, isSelected }) {
  return (
    <div className="icon-wrapper">
      <IconButton
        height="medium"
        padding="10px"
        sx={{ height: '50px', margin: '5px' }}
        onClick={onClick}>
        <img src={icon} style={{ height: '27px' }} />
      </IconButton>
      {isSelected && <motion.div className="switch-mode-btn" layoutId="viewModeTab" />}
    </div>
  );
}
