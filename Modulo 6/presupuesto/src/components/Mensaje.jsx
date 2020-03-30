import React from "react";
import { Alert } from "react-bootstrap";

const Mensaje = ({ mensaje , show ,setShow}) => {

  return (
    <div>
      {show ? (
        <Alert
          className="mb-2 success-alert"
          onClose={() => setShow(false)}
          dismissible
        >
          <p className="m-0">&#10004;  {mensaje}</p>
        </Alert>
      ) : null}
    </div>
  );
};

export default Mensaje;
