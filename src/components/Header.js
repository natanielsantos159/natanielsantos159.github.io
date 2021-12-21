import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <h1>Nataniel Santos</h1>
      <nav className="header-navs">
        <Link to="/">Início</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  )
}
