const UniqueQueryPage = () => {
  const consultarUnico = (id) => {
    axios.get(`http://localhost:3005/alunos/${id}`).then((resultado) => {
      <h1>resultado.data</h1>;
    });
  };
  
  return (
    <>
      <h1>UniqueQueryPage</h1>
    </>
  );
};
