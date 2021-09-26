import React from 'react';
import './Login.css';
import '../App.css';

function login() {
  return (
    <div>
      <div className="Login">
        <h1>Login</h1>
        <form action="">
          <p>Usuario</p>
          <input type="text" placeholder="Insira seu usuario" />
          <p>Senha</p>
          <input type="password" placeholder="Insira sua senha" />
          <input type="submit" value="Login" />
          <a href="wwww.eee">Esqueceu sua Senha ?</a><br />
          <a href="wwww.eee">Ainda não possui uma Conta ?</a>
        </form>
      </div>
    </div>
  );
}

export default login;

// up