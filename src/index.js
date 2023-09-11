const express = require("express");
const app = express();
const { alunosFilter, findAlunos } = require("./controladores/alunos");

app.use((requisicao, resposta, next) => {
  console.log("Passei pelo primeiro intermediario");
  next();
});

app.get("/", (req, res) => {
  res.send("Página inicial sério altera sozinho ótimo né?");
});
app.get("/alunos", alunosFilter);

app.get("/alunos/:id", findAlunos);

app.listen(3000, (req, res) => {
  console.log("Servidor local rodando no http://localhost:3000");
});
