import React, { useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { TextField } from '@mui/material';
import '../styles/ContactMe.css';

export default function ContactMe() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'contact');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const InputLabelProps = {
    style: { color: 'var(--color-primary)', fontWeight: 800 }
  };

  const inputFieldProps = {
    inputProps: { style: { color: 'white' } },
    InputLabelProps
  };

  return (
    <section className="contact-me-section" id="contact-me-section" ref={ref}>
      <h1>Entre em contato:</h1>
      <section className="send-email-section">
        <TextField
          label="Nome"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          name="name"
          variant="filled"
          {...inputFieldProps}
        />
        <TextField
          label="E-mail"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          name="email"
          variant="filled"
          {...inputFieldProps}
        />
        <TextField
          label="Mensagem"
          value={message}
          variant="filled"
          onChange={({ target: { value } }) => setMessage(value)}
          name="message"
          multiline
          rows={4}
          {...inputFieldProps}
        />
        <button className="default-btn">Enviar</button>
      </section>
    </section>
  );
}
