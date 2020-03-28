import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Mensaje = ({ mensaje }) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Alert
          variant="dark"
          className="text-center"
          onClose={() => setShow(false)}
          dismissible
        >
          <p className="m-0">{mensaje}</p>
        </Alert>
      ) : null}
    </div>
  );
};

export default Mensaje;
