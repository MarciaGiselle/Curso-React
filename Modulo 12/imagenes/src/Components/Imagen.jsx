import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const DivImagen = styled.img`
  min-height: 0px;
  max-height: 200px;
`;

const DivCard = styled.div`
  height: 16rem;
`;

const DivOverlay = styled.div`
  position: absolute;
  top: 1;
  right: 1;
  bottom: auto;
  left: auto;
  padding: 1.25rem;
`;

const Imagen = ({ imagen }) => {
  const { largeImageURL, tags, previewURL, likes } = imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <DivCard className="card">
        <DivImagen
          src={previewURL}
          alt={tags}
          className="card-img-top image "
        ></DivImagen>

        <DivOverlay className="card-img-overlay">
          <span className="card-text text-center text-success bg-light bottom rounded p-1">
            {likes}{" "}
            <span role="img" aria-label="emoji">
              &#128077;&#127997;
            </span>
          </span>
        </DivOverlay>
        <div className="card-footer bg-transparent">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-sm btn-block"
            role="button"
          >
            <span arial-label="emoji">&#128065;</span> Alta Resolución
          </a>
        </div>
      </DivCard>
    </div>
  );
};

Imagen.propTypes= {
  imagen : PropTypes.object.isRequired
}
export default Imagen;
