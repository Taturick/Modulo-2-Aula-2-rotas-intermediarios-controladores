const alunos = require("./bancodedados")

const alunosFilter = (req, res) => {
    const { stack, nome, id } = req.query;
    let resultado = alunos;
    
    console.log("Cheguei no controlador da listagem do professor")
  
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
  };

 const findAlunos =  (req, res) => {
    const alunoEncontrado = alunos.find((aluno) => {
      return aluno.id === Number(req.params.id);
    });
  
    if (alunoEncontrado) {
      res.send(`Nome do aluno: ${alunoEncontrado.nome}`);
    } else {
      res.status(404).send("Aluno não encontrado");
    }
  }

  module.exports = {
    findAlunos, alunosFilter, alunos
  }