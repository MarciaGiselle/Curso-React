import React, { Fragment } from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoRecetas from "./Components/ListadoRecetas";
import CategoriasProvider from "./Context/CategoriasContext";
import RecetasProvider from "./Context/RecetasContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>

            <ListadoRecetas />
          </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
