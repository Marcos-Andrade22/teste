import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importação dos seus componentes
import ListPage from "./Components/ListPage";
import InsertPage from "./Components/InsertPage";
import UniqueQueryPage from "./Components/UniqueQueryPage";
import DeletePage from "./Components/DeletePage";
import UpdatePage from "./Components/UpdatePage";
import HomePage from "./Routes/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Definindo as rotas para cada componente */}
          <Route path="/" element={<HomePage />} />
          <Route path="/listPage" element={<ListPage />} />
          <Route path="/insertPage" element={<InsertPage />} />
          <Route path="/uniqueQueryPage" element={<UniqueQueryPage />} />
          <Route path="/deletePage" element={<DeletePage />} />
          <Route path="/updatePage" element={<UpdatePage />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
