import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({respuesta}) => {
    if( !respuesta && respuesta === 'null' && respuesta === 'undefined') return null;
    const{name, main}= respuesta;
    if(!name) return null;
    //grados kelvin
    const kelvin = 273.15;
    return (  
        <div className="width-100 black-text">
            <h5>El clima de {name}:</h5>
            <p className='temperatura'>{parseFloat(main.temp-kelvin, 10).toFixed(1)}  <span>&#x2103;</span></p>
            <h6>Temperatura Máxima: <b>{parseFloat(main.temp_max-kelvin, 10).toFixed(1)} <span>&#x2103;</span> </b></h6>
            <h6>Temperatura Mínima:<b> {parseFloat(main.temp_min-kelvin, 10).toFixed(1)}  <span>&#x2103;</span></b></h6>
            <h6>Humedad:<b> {main.humidity}  <span>%</span></b></h6>
            
        </div>
    );
}
 
Clima.propTypes={
    respuesta: PropTypes.object.isRequired
}
export default Clima;