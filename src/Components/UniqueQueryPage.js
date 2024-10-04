import axios from "axios";

const UniqueQueryPage = () => {
  const consultarUnico = (id) => {
    axios.get(`http://localhost:3005/alunos/${id}`).then((resultado) => {
      <h1>resultado.data</h1>;
    });
  };
  
  return (
    <>
      <h1>Listar um usuário:</h1>
      <button onClick={consultarUnico}>Consultar Único</button>
    </>
  );
};

export default UniqueQueryPage;