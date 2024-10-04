import axios from "axios";
import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";

const InsertPage = () => {
  const [alunos, setAlunos] = React.useState([
    { id: "5", nome: "Daniel", matricula: "130" },
    { id: "6", nome: "Marcola", matricula: "131" },
  ]);

  const [novoAluno, setNovoAluno] = React.useState({});

  const limparAlunos = () =>{
    setAlunos([]);
  }

  const inserir = () => {
    if (!novoAluno.nome || !novoAluno.matricula) {
      alert("Aluno incompleto!!");
      return;
    }
    axios
      .post("http://localhost:3005/alunos", novoAluno)
      .then((resultado) => {
        setAlunos([...alunos, resultado.data]);
        setNovoAluno({});
      })
      .catch((erro) => {
        console.error("Erro ao adicionar aluno: ", erro);
      });
  };

  return (
    <>
      <TextInput
        label="Nome"
        type="text"
        placeholder="Nome"
        value={novoAluno.nome || ""}
        onChange={(e) => setNovoAluno({ ...novoAluno, nome: e.target.value })}
      />
      <TextInput
        label="Matricula"
        type="text"
        placeholder="Matrícula"
        value={novoAluno.matricula || ""}
        onChange={(e) =>
          setNovoAluno({ ...novoAluno, matricula: e.target.value })
        }
      />
      <Button onClick={inserir} label={"Adicionar Usuário"}/>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            Nome: {aluno.nome} - Matrícula {aluno.matricula}
          </li>
        ))}
      </ul>
      <Button onClick={limparAlunos} label={"Limpar Alunos"}/>
    </>
  );
};

export default InsertPage;
