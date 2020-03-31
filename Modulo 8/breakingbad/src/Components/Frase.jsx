import React from 'react'
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding:1.5rem;
    border-radius: 2rem;
    background-color: white;
    max-width: 80%;
    margin-top: 13rem;

    @media(min-width: 992px){
        margin-top: 14rem;
    }

    h2{
        font-family:Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 3rem;

        &::before{
            content:open-quote;
            font-size: 8rem;
            position: absolute;
            left: -1rem;
            top:-2rem;
        }
    }

    p{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: green;
        margin-top:1rem;
    }
`;

const Frase = ({frase}) => {
    return (
         <ContenedorFrase>
            <h2>{frase.quote}</h2>
            <p>- {frase.author}</p>
        </ContenedorFrase>
     );
}

export default Frase ;