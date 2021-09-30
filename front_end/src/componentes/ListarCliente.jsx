
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ListarCliente.css';
import '../App.css';

function ListarCliente() {
  const [cliente, setCliente] = useState([])
  const [pesquisa, setPesquisa] = useState ('-')

  const apagar = function (id) {
    clienteHttp.delete('/cliente/apagar/' + id).then(function (response) {
      listaCliente();
    });
  }

  const itensDb = cliente.map(function (item) {
    return (

      <tr key={item.id} className="bodyCliente" >
        <td className="nomeCliente">{item.nome}</td>
        <td className="sobrenomeCliente" > {item.sobrenome}</td>
        <td className="cpfCliente">{item.cpf}</td>
        <td className="cepCliente">{item.cep}</td>
        <td className="endCliente">{item.endereco}</td>
        <td className="numeroCliente">{item.numero}</td>
        <td className="compleCliente">{item.complemento}</td>
        <td className="bairroCliente">{item.bairro}</td>
        <td className="cidadeCliente">{item.cidade}</td>
        <td className="estadoCliente">{item.estado}</td>
        <button onClick={function () { apagar(item.id) }} className="Btm">Apagar</button>
      </tr>

    );
  });

  useEffect(function () {
    listaCliente()
    // eslint-disable-next-line
  }, [])

  const clienteHttp = axios.create({
    baseURL: 'http://localhost:3004/'
  });

  function listaCliente() {

    clienteHttp.get('cliente/listar/'+pesquisa).then(function (response) {
      setCliente(response.data)
    });
  }

  // function alteraValor(e) {
  //   setPesquisa(e.target.value);
  // }
  function busca() {
    listaCliente();
  }

  return (
    <div className="tabelaCliente">
      <div>
        <input type="text" onChange={e => setPesquisa(e.target.value)} /> <button onClick={busca}>Pesquisa</button><br />
      </div>
      <table className="tituloTabela">
        <tr className="topoCliente">
          <th className="nomeCliente">Nome</th>
          <th className="sobrenomeCliente">Sobrenome</th>
          <th className="cpfCliente">CPF</th>
          <th className="cepCliente">CEP</th>
          <th className="endCliente">Endereço</th>
          <th className="numeroCliente">Numero</th>
          <th className="compleCliente">Complemento</th>
          <th className="bairroCliente">Bairro</th>
          <th className="cidadeCliente">Cidade</th>
          <th className="estadoCliente">Estado</th>
          <th></th>
        </tr>
        <tr>&nbsp;</tr>
        <tr>&nbsp;</tr>
        <tr>&nbsp;</tr>
        {itensDb}
      </table>
    </div>

  );
}

export default ListarCliente;

