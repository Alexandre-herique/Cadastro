import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function cabecalho() {
  return (
    <div>
      <div className="Topo">
        <header className="container">
          <div className="front">
            <p className="logo">SCC</p>
            <p>
              Sistema de Cadastro de Clientes
            </p>
          </div>
          <nav className="menu">
            <Link to="/" className="linkMenu"> Home </Link>
            <Link to="/cliente" className="linkMenu"> Clientes </Link>
            <Link to="/usuario" className="linkMenu"> Usuario </Link>
            <Link to="/login" className="linkMenu"> Sair </Link>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default cabecalho;

// up