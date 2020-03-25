import React from "react";
import { Card, Container, Button, CardDeck } from "react-bootstrap";

const Citas = ({ citas , setCitas}) => {
    
    const eliminarCita = (id) =>{
        const citasActivas = citas.filter(cita => cita.id !== id);
        setCitas(citasActivas);
    }
  
    const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";
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
                    Fecha : <b>{cita.fecha}</b> <br/>
                    Hora: <b> {cita.hora}</b>
                  </span><br/>
                  <span>Sintomas :</span>
                  {cita.sintoma}
                </Card.Text>
                <Button variant='danger' size='sm' block
                    onClick= {()=>eliminarCita(cita.id)}
                >
                Eliminar &times;       
                </Button>
              </Card.Body>
            </Card>
            ) )}
        </CardDeck>
        </Container>
  );
};

export default Citas;
