const usuarios = require("./mocks/usuarios");
const avisos = require("./mocks/avisos");
const tarefas = require("./mocks/tarefas");
const reservas = require("./mocks/reservas");

console.log("Usuários:", usuarios);
console.log("Avisos:", avisos);
console.log("Tarefas:", tarefas);
console.log("Reservas:", reservas);

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/avisos", (req, res) => {
  const aviso = req.body;
  console.log("Novo aviso recebido:", aviso);
  res.status(201).send({ message: "Aviso cadastrado com sucesso!", aviso });
});

app.post("/tarefas", (req, res) => {
  const tarefa = req.body;
  console.log("Nova tarefa recebida:", tarefa);
  res.status(201).send({ message: "Tarefa cadastrada com sucesso!", tarefa });
});

app.post("/usuarios", (req, res) => {
  const usuario = req.body;
  console.log("Novo usuário recebido:", usuario);
  res.status(201).send({ message: "Usuário cadastrado com sucesso!", usuario });
});

app.post("/reservas", (req, res) => {
  const reserva = req.body;
  console.log("Nova reserva recebida:", reserva);
  res.status(201).send({ message: "Reserva cadastrada com sucesso!", reserva });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const express = require('express');
const app = express();
app.use(express.json());

app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  res.status(201).json({
    mensagem: 'Usuário recebido com sucesso',
    usuario: novoUsuario
  });
});

app.post('/avisos', (req, res) => {
  const novoAviso = req.body;
  res.status(201).json({
    mensagem: 'Aviso recebido com sucesso',
    aviso: novoAviso
  });
});

app.post('/tarefas', (req, res) => {
  const novaTarefa = req.body;
  res.status(201).json({
    mensagem: 'Tarefa recebida com sucesso',
    tarefa: novaTarefa
  });
});

app.post('/reservas', (req, res) => {
  const novaReserva = req.body;
  res.status(201).json({
    mensagem: 'Reserva recebida com sucesso',
    reserva: novaReserva
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});

const testeReserva = {
  sala: 'Laboratório de Química',
  professor: 'Carlos Oliveira',
  data: '2026-07-15'
};

fetch('http://localhost:3000/reservas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(testeReserva)
})
.then(res => res.json())
.then(dados => console.log('Resposta do teste:', dados));



