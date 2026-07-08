const express = require("express");
const cors = require("cors");


const app = express();


app.use(cors());
app.use(express.json());




const usuarios = [
  { email: "ana@email.com", senha: "1234" },
  { email: "joao@email.com", senha: "abcd" }
];




const sessoes = [];




app.post("/login", (req, res) => {
  const { email, senha } = req.body;


  const usuario = usuarios.find(
    (u) => u.email === email && u.senha === senha
  );


  if (!usuario) {
    return res.status(401).json({ mensagem: "Login inválido" });
  }


  const token = "token-" + Date.now();


  sessoes.push(token);


  res.json({ token });
});


function verificarToken(req, res, next) {
  const token = req.headers.authorization;


  if (!sessoes.includes(token)) {
    return res.status(401).json({ mensagem: "Token inválido" });
  }


  next();
}


app.get("/tarefas", verificarToken, (req, res) => {
  res.json([
    "Fazer atividade",
    "Estudar JavaScript",
    "Entregar trabalho"
  ]);
});


app.post("/logout", verificarToken, (req, res) => {
  const token = req.headers.authorization;


  const indice = sessoes.indexOf(token);


  if (indice !== -1) {
    sessoes.splice(indice, 1);
  }


  res.json({ mensagem: "Logout realizado" });
});


app.listen(3000, () => {
  console.log("Servidor rodando...");
});



