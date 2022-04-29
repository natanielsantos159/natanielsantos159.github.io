import React, { useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { TextField } from '@mui/material';
import '../styles/ContactMe.css';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const ref = useRef();
  useOnScreen(ref, '-250px', 'contact');
  const form = useRef();

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

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      from_name: name,
      message,
    }
    emailjs.send('service_vwfp2nh', 'template_y82qdu5', templateParams, 'PDtV6JmAww644P-M6').then(
      () => {
        resetForm();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact-me-section" id="contact-me-section" ref={ref}>
      <h1>Entre em contato:</h1>
      <form className="send-email-section" ref={form}>
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
        <button type="submit" className="default-btn" onClick={sendEmail}>
          Enviar
        </button>
      </form>
    </section>
  );
}
