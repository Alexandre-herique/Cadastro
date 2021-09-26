import React from 'react';
import './ListarUsuario.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ListarUsuario() {
  const [usuario, setUsuario] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  const apagar = function (id) {
    clienteHttp.delete('/usuario/apagar/' + id).then(function (response) {
      listaUsuario();
    });
  }

  const itens = usuario.map(function (item) {
    return (
      <tr key={item.id}>
        <td>{item.nome}</td>
        <td>{item.email}</td>
        <td>{item.status}</td>
        <button onClick={function () { apagar(item.id) }}>Apagar</button>
      </tr>
    );
  });

  useEffect(function () {
    listaUsuario()
    // eslint-disable-next-line
  }, [])

  const clienteHttp = axios.create({
    baseURL: 'http://localhost:3004/'
  });

  function listaUsuario() {

    clienteHttp.get('usuario/listar/'+pesquisa).then(function (response) {
      setUsuario(response.data)
    });
  }

  function busca() {
    listaUsuario()
  }

  return (
    <div className="tabelaUsuario">
      <div>
        <input type="text" onChange={e => setPesquisa(e.target.value)} /> <button onClick={busca}>Pesquisa</button><br />
      </div>
      <table>
        <tr>
          <th className="nomeUsuario">Nome</th>
          <th className="emailUsuario">E-mail</th>
          <th className="statusUsuario">Status</th>
        </tr>
        <tr>&nbsp;</tr>
        <tr>&nbsp;</tr>
        <tr>&nbsp;</tr>
        {itens}
        
      </table>
    </div>

  );
}

export default ListarUsuario;



// up