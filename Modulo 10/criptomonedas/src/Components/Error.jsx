import React from 'react'
import styled from '@emotion/styled';

const MensajeError = styled.p`
    margin: .5rem 0rem;
    padding: 1rem;
    color: white;
    background-color: rgb(102, 0, 111);
    border-radius: 2px;
    text-align:center;
    font-size:1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing:2px;
    `;

const Error = ({mensaje}) => {
    return (
    <MensajeError>{mensaje}</MensajeError>
      );
}
 
export default Error;