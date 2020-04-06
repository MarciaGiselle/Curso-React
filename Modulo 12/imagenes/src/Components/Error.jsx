import React from "react";
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
  return (
    <div className="row">
      <div className="alert alert-danger w-50 text-center m-auto">
          {mensaje}
      </div>
    </div>
  );
};

Error.propTypes = {
  mensaje : PropTypes.string.isRequired
}

export default Error;
