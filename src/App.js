import axios from "axios";
import React from "react";

const Home = () => <h1>Home Page</h1>;
const ListPage = () => <h1>List Page</h1>;
const InsertPage = () => <h1>Insert Page</h1>;
const UniqueQueryPage = () => <h1>UniqueQuery Page</h1>;
const DeletePage = () => <h1>Delete Page</h1>;
const UpdatePage = () => <h1>Update Page</h1>;

const goToHomePage = () => {
  history.push("/home");
};

const goToListPage = () => {
  history.push("/listPage");
};

const goToInsertPage = () => {
  history.push("/listPage");
};

const goToUniqueQueryPage = () => {
  history.push("/listPage");
};

const goToDeletePage = () => {
  history.push("/listPage");
};

const goToUpdatePage = () => {
  history.push("/listPage");
};









function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/goToListPage" component={goToListPage} />
          <Route path="/goToUniqueQueryPage" component={goToUniqueQueryPage} />
          <Route path="/goToInsertPage" component={goToInsertPage} />
          <Route path="/goToUpdatePage" component={goToUpdatePage} />
          <Route path="/goToDeletePage" component={goToDeletePage} />
        </Switch>
      </Router>
      <div>
        <button onClick={goToListPage}>Listar</button>
        <button onClick={goToUniqueQueryPage}>Consultar Único</button>
        <button onClick={goToInsertPage}>Inserir</button>
        <button onClick={goToUpdatePage}>Alterar</button>
        <button onClick={goToDeletePage}>Excluir</button>
      </div>
    </>
  );
}

export default App;
