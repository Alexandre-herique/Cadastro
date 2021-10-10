const express = require('express'); //chamando a biblioteca express 
const cors = require('cors'); //chamando a biblioteca cors
const mysql = require('mysql'); //chamando a biblioteca mysql

const conn = mysql.createConnection({   //solicitação de conexão
  host: 'localhost',
  user: 'root',
  password: '@lexandre230188',
  database: 'SCC'
});

conn.connect(); //ligar a conexão com mysql

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// Listar/Pesquisa

app.get('/cliente/listar/:titulo', function (req, res) {

  var whereTitulo = '';

  if (req.params.titulo != '-') {
    whereTitulo = ' WHERE nome like "%' + req.params.titulo + '%" OR sobrenome like "%' + req.params.titulo + '%" OR cpf like "%' + req.params.titulo + '%" OR cep like "%' + req.params.titulo + '%" OR endereco like "%' + req.params.titulo + '%" OR bairro like "%' + req.params.titulo + '%" OR cidade like "%' + req.params.titulo + '%"'
  };

  conn.query('SELECT * FROM clientes' + whereTitulo, function (erro, resultado, campos) {
    res.json(resultado);
  });
});

app.get('/usuario/listar/:pesquisa', function (req, res) {

  var whereBusca = '';


  if (req.params.pesquisa != '-') {
    whereBusca = ' WHERE nome like "%' + req.params.pesquisa + '%" OR email like "%' + req.params.pesquisa + '%"'
  }

  conn.query('SELECT * FROM usuarios' + whereBusca, function (erro, resultado, campos) {
    res.json(resultado);
  });
});


// Post

app.post('/usuario/criar', function (req, res) {

  conn.query('INSERT INTO usuarios (nome, email, status) VALUES ("' + req.body.nome + '", "' + req.body.email + '", "' + req.body.senha + '", "' + req.body.status + '")', function (erro, resultado, campos) {
    res.json(resultado);
  });
});

app.post('/cliente/criar', function (req, res) {

  conn.query('INSERT INTO clientes (nome, sobrenome, cpf, cep, endereco, complemento, numero, cidade, estado) VALUES ("' + req.body.nome + '", "' + req.body.sobrenome + '","' + req.body.cpf + '","' + req.body.cef + '","' + req.body.endereco + '","' + req.body.complemento + '","' + req.body.numero + '","' + req.body.cidade + '","' + req.body.estado + '")', function (erro, resultado, campos) {
    res.json(erro);
  });
});

// Delete

app.delete('/usuario/apagar/:id', function (req, res) {

  conn.query('DELETE FROM usuarios WHERE id = ' + req.params.id, function (erro, resultado, campos) {
    res.json(resultado);
  });
});

app.delete('/cliente/apagar/:id', function (req, res) {

  conn.query('DELETE FROM clientes WHERE id = ' + req.params.id, function (erro, resultado, campos) {
    res.json(resultado);
  });
});



app.listen(3004, function () {
  console.log('servidor em execução')
});