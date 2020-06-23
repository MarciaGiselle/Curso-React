import React, { useState, useEffect, createContext } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const ModalComponent = ({ isOpen, hideModal, id }) => {
  const [recetaApi, setReceta] = useState({});

  //consultar a la api por esa receta
  useEffect(() => {
    if (id !== null) {
      const consultarApi = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const resultado = await axios.get(url);

        setReceta(resultado.data.drinks[0]);
      };
      consultarApi();
    }
  }, [id]);


  const mostrarInformacion = () => {

    let ingredientes = [];
    for (let i = 1 ; i < 16; i++){
        if(recetaApi[`strIngredient${i}`]){
            ingredientes.push(
               <li key={i}>
                <b>{recetaApi[`strIngredient${i}`]}</b>
                - {recetaApi [`strMeasure${i}`]}</li>
            )
        }
       
    }
    return ingredientes;
  } 

  return (
    <Modal show={isOpen} onHide={hideModal}>
      <div className="modal-header">
        <h4 className="modal-title">{recetaApi.strDrink}</h4>
      </div>
      <div className="modal-body">
        <h5>Instrucciones</h5>
        <p> {recetaApi.strInstructions}</p>
        <img className="img-fluid my-2" src={recetaApi.strDrinkThumb}></img>

        <h5>Ingredientes y cantidades</h5>
        <ul>
        {mostrarInformacion()}

        </ul>
      </div>

      <div className="modal-footer">
        <button onClick={hideModal}>Cerrar</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
