import React, { Fragment } from "react";

const Gasto = ({ gasto }) => (
  <Fragment>
    <div className="col-6 pl-0">
      <p className="mt-2 mb-0">
        <b>{gasto.nombreGasto}</b>
      </p>
    </div>
    <div className="col-1 monto">
      <p className="mb-0 text-right text-muted align-bootom">$</p>
    </div>
    <div className="col-3 monto">
      <p className="mb-0 text-right bg-black align-bootom"> {gasto.monto}</p>
    </div>
  </Fragment>
);

export default Gasto;
