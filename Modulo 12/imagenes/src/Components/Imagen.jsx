import React from "react";

const Imagen = ({ imagen }) => {
  console.log(imagen);

  const { largeImageURL, tags, previewURL, likes } = imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top image "></img>
     

      <div className="card-body">
        <p className="card-text">{likes} me gusta</p>
      </div>

      <div className="card-footer">
        <a
          href={largeImageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-sm btn-block"
        >
          Ver imagen
        </a>
      </div>
      </div>
    </div>
  );
};

export default Imagen;
