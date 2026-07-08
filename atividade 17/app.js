const express = require('express');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.json());


let avisos = [];
let tarefas = [];
let usuarios = [];




app.post('/avisos', (req, res) => {
  const novo = {
    id: avisos.length + 1,
    titulo: req.body.titulo
  };


  avisos.push(novo);


  res.status(201).json({
    mensagem: 'Aviso cadastrado com sucesso'
  });
});




app.post('/tarefas', (req, res) => {
  const nova = {
    id: tarefas.length + 1,
    nome: req.body.nome
  };


  tarefas.push(nova);


  res.status(201).json({
    mensagem: 'Tarefa cadastrada com sucesso'
  });
});




app.post('/login', (req, res) => {
  const { email, senha } = req.body;


  if (email && senha) {
    return res.json({
      mensagem: 'Login realizado com sucesso'
    });
  }


  res.status(400).json({
    mensagem: 'E-mail ou senha inválidos'
  });
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

