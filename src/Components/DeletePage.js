import axios from "axios";

const DeletePage = () => {
  const excluir = (id) => {
    axios.delete(`http://localhost:3005/alunos/${id}`).then((resultado) => {
      <h1>resultado.status</h1>;
    });
  };

  return (
    <>
      <h1>Delete Page</h1>
      <button onClick={excluir}>Excluir</button>
    </>
  );
};

export default DeletePage;