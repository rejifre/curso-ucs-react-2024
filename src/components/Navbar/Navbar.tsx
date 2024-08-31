import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <Link to="/cadastro-usuario" className="createAccount"> Cadastro </Link>
        <li><Link to="/cadastro-livros">Cadastro de Livros</Link></li>
        <li><Link to="/lista-livros">Lista de livros</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
