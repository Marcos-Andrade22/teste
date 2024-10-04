import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };

  const goToListPage = () => {
    navigate("/listPage");
  };

  const goToInsertPage = () => {
    navigate("/insertPage");
  };

  const goToUniqueQueryPage = () => {
    navigate("/uniqueQueryPage");
  };

  const goToDeletePage = () => {
    navigate("/deletePage");
  };

  const goToUpdatePage = () => {
    navigate("/updatePage");
  };

  return (
    <div>
      <button onClick={goToListPage}>Listar</button>
      <button onClick={goToUniqueQueryPage}>Consultar Único</button>
      <button onClick={goToInsertPage}>Inserir</button>
      <button onClick={goToUpdatePage}>Alterar</button>
      <button onClick={goToDeletePage}>Excluir</button>
    </div>
  );
};

export default HomePage;
