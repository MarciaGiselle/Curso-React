import React from "react";

const Error = ({mensaje}) => {
  return (
    <div className="row">
      <div className="alert alert-danger w-50 text-center m-auto">
          {mensaje}
      </div>
    </div>
  );
};

export default Error;
