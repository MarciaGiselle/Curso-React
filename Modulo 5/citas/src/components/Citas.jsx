import React from "react";
import { Card, Container, Button, CardDeck } from "react-bootstrap";
import PropTypes from 'prop-types';

const Citas = ({ citas , setCitas}) => {
    
    const eliminarCita = (id) =>{
        const citasActivas = citas.filter(cita => cita.id !== id);
        setCitas(citasActivas);
    }
  
    const titulo = citas.length === 0 ? "Aún no hay citas" : "Administra tus citas";
    return (
    <Container>
      <h4 className="font-weight-bold">{titulo}</h4>
      <hr />
        <CardDeck>
            {citas.map(cita => (
            <Card key={cita.id} className='mr-2'>
              <Card.Body>
                <Card.Title>Mascota: <b>{cita.mascota}</b></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Responsable: {cita.padre}
                </Card.Subtitle>
                <Card.Text>
                  <span>
                    Fecha: <b>{cita.fecha}</b> <br/>
                    Hora: <b> {cita.hora}</b>
                  </span><br/>
                  <span>Síntomas: </span>
                  {cita.sintoma}
                </Card.Text>
                <Button variant='outline-danger' size='sm' block
                    onClick= {()=>eliminarCita(cita.id)}
                >
                Eliminar cita <span aria-label='emoji' role='img'>&#10060;</span>   
                </Button>
              </Card.Body>
            </Card>
            ) )}
        </CardDeck>
        </Container>
  );
};

//documentacion
Citas.propTypes = {
    citas : PropTypes.array.isRequired,
    setCitas : PropTypes.func.isRequired 
  }
  
export default Citas;
