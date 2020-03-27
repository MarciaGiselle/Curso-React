import React, {Fragment, useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import Error from './Error';

const Condicional = ({setRestante, setPresupuesto}) => {
    const [cantidad, setCantidad] = useState(0);
    
    const [error, setError] = useState(false);

    const [mensaje, setMensaje] = useState('');
    //definir presupuesto
    
    const definirPresupuesto = e =>{
        setCantidad(parseInt(e.target.value, 10))
    }

    const submitForm = e =>{
        e.preventDefault();

         //validar la cantidad
        if(cantidad <= 0 ){
            setError(true);
            setMensaje("La cantidad debe ser mayor que 0");
            return;
        }

        if(isNaN(cantidad)){
            setError(true);
            setMensaje("No ha ingresado una cantidad válida");
            return;
        }

        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
    }
    
    return (  
        <Fragment>
            <Form
                onSubmit={submitForm}
            >
            <Form.Group>
            <Form.Label>Ingresa tu presupuesto</Form.Label>
            <Form.Control
                type="number"
                name="presupuesto"
                onChange={ definirPresupuesto}
            /><br/>
            {error ? <Error mensaje={mensaje}/> : null}
            <Button variant='primary' block
                type="submit"
            >Definir presupuesto</Button>

            </Form.Group>
            </Form>     

        </Fragment>
    );
}
 
export default Condicional;