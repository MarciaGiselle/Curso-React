export const establecerColorAlert = (presupuesto, restante) => {
    let clase;
    if(restante < presupuesto*0.25 )
        clase="danger"
    else if( restante < presupuesto*0.5)    
        clase = "warning"
    else{
        clase="primary"
    }    
    return clase;
}   