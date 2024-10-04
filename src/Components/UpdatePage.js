import axios from "axios";

const UpdatePage = () => {
  const alterar = (id) => {
    axios.get(`http://localhost:3005/alunos/${id}`).then((resultado) => {
      let aluno = resultado.data;
      aluno.nome += " (alterado)"
        .put(`http://localhost:3005/alunos/${id}`, aluno)
        .then((resultado) => {
          <h1>resultado.status</h1>;
        });
    });
  };

  return (
    <>
      <h1>Update Page</h1>
      <button onClick={alterar}>Atualizar usuário</button>
    </>
  );
};

export default UpdatePage;
