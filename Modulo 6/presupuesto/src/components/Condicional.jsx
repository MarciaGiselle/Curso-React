import React, {Fragment} from 'react'
import {Form, Button} from 'react-bootstrap';

const Condicional = () => {
    return (  
        <Fragment>
            <Form>
            <Form.Group>
            <Form.Label>Ingresa tu presupuesto</Form.Label>
            <Form.Control
                type="number"
                name="presupuesto"
            /><br/>
            <Button variant='primary' block
                type="submit"
            >Definir presupuesto</Button>

            </Form.Group>
            </Form>     

        </Fragment>
    );
}
 
export default Condicional;