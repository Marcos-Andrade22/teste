const InsertPage = () => {
    
  const inserir = () => {
    const aluno = { id: "4", nome: "Daniela", matricula: "129" };
    axios.post("http://localhost:3005/alunos", aluno).then((resultado) => {
      <h1>resultado.status</h1>;
    });
  };

  return (
    <>
      <h1>Insert Page</h1>
    </>
  );
};
