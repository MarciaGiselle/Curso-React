import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [busquedaParaApi, setBusquedaParaApi] = useState({
        ingrediente: '',
        categoria:''
    });

    const [consultarApi, setConsultarApi] = useState(false);
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        if(consultarApi){
            const consultarApi = async() => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busquedaParaApi.ingrediente}
                &c=${busquedaParaApi.categoria}`;
                const respuesta = await axios.get(url);

                setRecetas(respuesta.data.drinks);
            }
            consultarApi();
        }
    }, [busquedaParaApi, consultarApi])


    return (  
        <RecetasContext.Provider
            value={{
                recetas,
                setBusquedaParaApi,
                setConsultarApi
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;