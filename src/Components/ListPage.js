import axios from "axios";
import React, {useState} from "react";

const ListPage = () => {

  const [alunos, setAlunos] = React.useState([])

  const listar = () => {
    axios.get("http://localhost:3005/alunos").then((resultado) => {
      setAlunos(resultado.data)
    });
  };

  return (
    <>
      <h1>List Page</h1>
      <button onClick={listar}>Listar</button>

      <ul>
        {alunos.map((aluno) =>(
          <li key={aluno.id}>Nome: {aluno.nome} - Matrícula: {aluno.matricula} </li>
        ))}
      </ul>
    </>
  );
};

export default ListPage;