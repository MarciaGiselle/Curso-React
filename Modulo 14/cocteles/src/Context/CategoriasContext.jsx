import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//creando el context

export const CategoriasContext = createContext();


//Provider --  es de donde van a salir los datos y las funciones.

const CategoriasProvider = (props) => {
    const [categorias, setCategorias] = useState([]);

    //llamado a la api
    useEffect(() => {
        const consultarApi = async ()=> {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const listado = await axios.get(url);
            setCategorias(listado.data.drinks);
        };

        consultarApi();
    }, [])

    return (
        //{prop.children} va a tener los datos de los otros componentes
        //lo q esta en el value es lo q se hace disponible
        <CategoriasContext.Provider
            value={{
                categorias
            }}

        >
            {props.children}

        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;