const express = require("express");

const app = express();

const alunos = [
  { id: 1, nome: "Rick", stack: "BackEnd" },
  { id: 2, nome: "Tatu", stack: "FrontEnd" },
  { id: 3, nome: "Danilo", stack: "BackEnd" },
  { id: 4, nome: "Ani", stack: "Ux/Ui" },
  { id: 5, nome: "Francis", stack: "BackEnd" },
];

app.get("/", (req, res) => {
  res.send("Página inicial sério altera sozinho ótimo né?");
});
app.get("/alunos", (req, res) => {
      const { stack, nome, id } = req.query;
      let resultado = alunos;
    
      if (stack) {
        resultado = resultado.filter((aluno) => {
          return aluno.stack === stack;
        });
      }
    
      if (nome) {
        resultado = resultado.filter((aluno) => {
          return aluno.nome === nome;
        });
      }
    
      if (id) {
        resultado = resultado.find((aluno) => {
          return aluno.id === Number(id);
        });
      }
    
      if (resultado.length > 0) {
        res.send(resultado);
      } else {
        res.status(404).send('Aluno(s) não encontrado(s)');
      }
    });

app.get("/alunos/:id", (req, res) => {
  const alunoEncontrado = alunos.find((aluno) => {
    return aluno.id === Number(req.params.id);
  });

  if (alunoEncontrado) {
    res.send(`Nome do aluno: ${alunoEncontrado.nome}`);
  } else {
    res.status(404).send("Aluno não encontrado");
  }
});

app.listen(3000, (req, res) => {
  console.log("Servidor local rodando no http://localhost:3000");
});
