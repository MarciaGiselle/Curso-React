import React, { useContext, useState, useEffect } from "react";
import Modal from './Modal';

const Receta = ({ receta }) => {
  //const { setId, recetaApi } = useContext(ModalContext);

  const [ id, setId ] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setId(null);
  };

  const buttonClick = () => {
    setId(receta.idDrink);
  };

useEffect(() => {
    if(id!= null){

        showModal();
    }
}, [id])

  return (
    <div className="col-md-4 mb-3">
      <div className="card border-rosa">
        <h5 className="card-header text-uppercase">{receta.strDrink}</h5>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={receta.strDrink}
        ></img>

        <div className="card-body">
          <button className="btn btn-success btn-block" onClick={buttonClick}>
            Ver receta
          </button>
        </div>
       {isOpen ? 
        <Modal
            id={id}
            isOpen={isOpen}
            hideModal={hideModal}
        >
        </Modal>
       :null}
      
      </div>
    </div>
  );
};

export default Receta;
