export function obtenerDiferenciaYears(year){
    return new Date().getFullYear() - year;
}

export function calcularIncrementoPorMarca( base, marca ){
    if(parseInt(marca) === 1){
        base *= 1.15;
    }else if(parseInt(marca) === 2){
        base *= 1.05;
    }else{
        base *= 1.30; 
    }
    return base;
}

export function calcularIncrementoPorPlan(base, plan){
    return (plan === 'basico') ? base*=1.2 : base*=1.5;
}

