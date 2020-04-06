import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import useMoneda from '../Hooks/useMoneda';
import useCriptomoneda from '../Hooks/useCriptomoneda';
import Error from './Error';


const Boton = styled.input`
    margin-top: 3rem;
    font-weight: bold;
    font-size:20px;
    padding: 10px;
    background-color: black;
    border:none;
    width: 100%;
    border-radius:3px;
    color: white;
    letter-spacing:2px;

    transition: background-color .5s ease;

    &:hover{
        background-color: rgb(102, 0, 111);
        cursor:pointer;
    }
`;
const Formulario = ({setMoneda, setCriptomoneda}) => {

    const [listadoCriptomonedas, setListadoCriptomonedas] = useState([]); 
    const [error, setError] = useState(false);

    const monedas=[
        {codigo: 'USD', nombre: 'Dólar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra esterlina'},
        {codigo: 'ARS', nombre: 'Peso Argentino'}
    ];

    //funcion que llena el select de criptomonedas
    useEffect(() => {
       const consultarAPI = async ()=>{

        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
        const resultado = await axios.get(url);
        setListadoCriptomonedas(resultado.data.Data);
    }
    
    consultarAPI();
        
    },[]);

    const [moneda, InterfazSelectMoneda] = useMoneda('Elige tu moneda', '', monedas);
    const [criptomoneda, InterfazSelectCriptomoneda] = useCriptomoneda('Elige tu criptomoneda', '', listadoCriptomonedas);

    //validar formulario
    const submitFormulario = e =>{
    e.preventDefault();
    if(moneda.trim() === ''  || criptomoneda.trim() === ''){
        setError(true);
        return;
    }

    setError(false);

    const setearValoresAlComponentePrincipal =  () => {
        setMoneda(moneda);
        setCriptomoneda(criptomoneda);
    }
    
    setearValoresAlComponentePrincipal();
};


    return (  
        <form
            onSubmit={submitFormulario}
        >
            {error? <Error mensaje='Seleccione ambos campos'></Error> : null}
            <InterfazSelectMoneda></InterfazSelectMoneda>
            <InterfazSelectCriptomoneda></InterfazSelectCriptomoneda>
            <Boton
                type='submit'
                value='Calcular'
            />

        </form>


    );
}
 
export default Formulario;