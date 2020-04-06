import React from "react";
import PropTypes from 'prop-types';


const Formulario = ({busqueda, setBusqueda, setConsulta, setMensaje, setError}) => {

const handleChange = e => {
    setBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value
    })
}

const {pais, ciudad} = busqueda;

const handleSubmit = e => {
    e.preventDefault();
    if(pais.trim() === '' || ciudad.trim() === ''){
        setError(true);
        setMensaje ("Todos los campos son obligatorios.");
        return;
    }

    setError(false);
    setConsulta(true);

}

  return (
    <form className="width-100" onSubmit={handleSubmit}>
      <div className="input-field col s12">
        <input 
            type="text"
            name="ciudad" 
            id="ciudad" 
            value={ciudad}
            onChange={handleChange} />
        <label htmlFor="ciudad">Ciudad </label>
      </div>

      <div className="input-field col s12">
        <select 
            name="pais"
            id='pais'
            value={pais}
            onChange={handleChange} 
        >
          <option value="AR" >Argentina </option>
          <option value="MX">México</option>
          <option value="CO">Colombia</option>
          <option value="US">Estados Unidos</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País </label>
      </div>
      <div className='input-field col s12 '>
        <input
         type='submit'
         value='Buscar clima'
         className='waves-effect waves-light btn-block  btn-large teal lighten-2'
        />

      </div>
    </form>
  );
};

Formulario.propTypes={
    busqueda: PropTypes.object.isRequired,
    setBusqueda:PropTypes.func.isRequired,
    setConsulta:PropTypes.func.isRequired,
    setMensaje:PropTypes.func.isRequired,
    mensaje:PropTypes.string,
    setError:PropTypes.func.isRequired
}

export default Formulario;
