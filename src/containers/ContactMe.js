import React, { useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../styles/ContactMe.css';

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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'E-mail enviado com sucesso!',
          showConfirmButton: false,
          timer: 2500,
          background: 'var(--color-bg)',
          color: 'var(--color-primary)',
        })

      },
      () => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Ocorreu um erro ao enviar o e-mail',
          showConfirmButton: false,
          timer: 2500,
          background: 'var(--color-bg)',
          color: 'var(--color-primary)',
        })
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
        <button type="submit" className="default-btn" onClick={sendEmail} disabled={!email || !name || !message}>
          Enviar
        </button>
      </form>
    </section>
  );
}
