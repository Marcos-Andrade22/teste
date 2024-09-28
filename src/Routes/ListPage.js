const ListPage = () => {
  const listar = () => {
    axios.get("http://localhost:3005/alunos").then((resultado) => {
      <h1>resultado.data</h1>;
    });
  };

  return (
    <>
      <h1>List Page</h1>
    </>
  );
};
