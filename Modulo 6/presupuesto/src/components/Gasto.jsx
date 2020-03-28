import React, { Fragment } from "react";

const Gasto = ({ gasto }) => (
    <div key={gasto.id} className="mt-1">
      <div className="row">
        <div className="col-lg-7 pl-0">
          <p className='mt-2 mb-0'><b>{gasto.nombreGasto}</b></p>
          
        </div>
        <div className="col-lg-1 monto">
            <span className='text-right text-muted'>$</span>
         </div>
        <div className="col-lg-4 monto">
          <p className="mb-2 text-right bg-black ">   {gasto.monto}</p>
        </div>
        
      </div>
      <hr className='m-0'/>
    </div>
);

export default Gasto;
