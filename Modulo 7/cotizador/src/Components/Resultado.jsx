import React from 'react'
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Mensaje = styled.p`
background-color: #673ab7;
color: #FFF;
margin-top: 1rem;
padding: 1rem;
text-align:center;
`

const ContenedorCotizacion = styled.div`
position: relative;
text-align:center;
padding: .2rem;
border: 1px solid turquoise;
background-color: #673ab7;
margin-top: 1rem;
`
const TextoCotizacion = styled.h6`
font-size: 1.5rem;
font-weight: bold;
padding: 1rem;
margin:0;
color: #FFF;
`

const Resultado = ({cotizacion}) => {
return (  

    (cotizacion === 0) ?
    <Mensaje>Elige marca, año y tipo de plan.</Mensaje>:
    
    (
        <ContenedorCotizacion>
            <TransitionGroup component='span' className='resultado'>
                <CSSTransition 
                    classNames='resultado'
                    key= {cotizacion}
                    timeout={{enter:500, exit:500}} >
                    <TextoCotizacion>COTIZACIÓN: $<span> {cotizacion}</span></TextoCotizacion>
                </CSSTransition>
            </TransitionGroup>
        </ContenedorCotizacion>
    )
    )
}
 
Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
export default Resultado;