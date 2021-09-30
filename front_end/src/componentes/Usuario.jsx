import React from 'react';
import { useState } from 'react';
import './FormUsuario.css';
import axios from 'axios';
import ListarUsuario from './ListarUsuario';
import '../App.css';

function Usuario() {
  const [nome, setNome] = useState([]);
  const [sobrenome, setSobrenome] = useState([]);
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);

  const clienteHttp = axios.create({
    baseURL: 'http://localhost:3004/'
  });

  const criarUsuario = () => {
    clienteHttp.post('usuario/criar', { nome: nome, sobrenome: sobrenome, email: email, senha: senha, status: 1 }).then(function (response) {
      console.log(response.data)
      ListarUsuario()
    });
  }

  return (
    <div>
      <div className="formUsuarios">
        <div className="container">
          <form action="">
            <label>Nome</label>
            <input type="text" className="nome" onChange={e => setNome(e.target.value)} />
            <label>sobrenome</label>
            <input type="text" className="sobrenome" onChange={e => setSobrenome(e.target.value)} /> <br />
            <label>E-mail</label>
            <input type="text" className="login" onChange={e => setEmail(e.target.value)} />
            <label>Senha</label>
            <input type="Senha" className="Senha" onChange={e => setSenha(e.target.value)} />
            <button className="BTM" onClick={criarUsuario}>Registrar</button>
          </form>
        </div>
      </div>
      <div className="container">
        <ListarUsuario />
      </div>
    </div>
  );
}

export default Usuario;

// up