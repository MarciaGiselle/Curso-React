//2.5 template strings nueva formar de concatenar
let contenedor = document.querySelector('#app');

const n = "Marcia";

let html = `<ul>
				<li>Nombre- ${n} </li>
			</ul>
			`;

contenedor.innerHTML = html;	

//2.6 funciones arrow function
let realizarViaje = destino => `Estoy viajando a la ciudad de: ${destino}`;

let viaje = realizarViaje('Londres');

console.log(viaje);

 
 //object literal
 const persona = {
 	identidad: {
 		nombre:"Marcia",
 		apellido: "Toledo"
 	},
 	edad: 25,
 	profesion: ["Desarrolladora", "Diseñadora"]
 }

 console.log(persona);
 console.log(persona.identidad.nombre);

//2.9 object constructor
 function Tarea(nombre,urgencia){
 	this.nombre = nombre;
 	this.urgencia = urgencia;
 }


//2.11 prototype

Tarea.prototype.mostrarInformacion = function(){
	return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}` ;
}

const tareaUno = new Tarea("Preparar cafe", "urgente");
console.log(tareaUno);

console.log(tareaUno.mostrarInformacion());

//como extraer valores del objeto
//forma anterior
let nombrePersona = persona.identidad.nombre;
let profesion = persona.profesion[1];

//console.log(`La profesion de ${nombrePersona} es ${profesion}`);

//forma nueva
let {edad} = persona;
console.log(edad);

let {nombre} = persona.identidad;
console.log(nombre);

//2.15 arrays

const carrito = ['Alcohol en gel', 'Servilletas', 'Barbijos'];

//contenedor.innerHTML = carrito;

//carrito.forEach(producto => {
//	html += `<li>${producto}</li>`
//})

//contenedor.innerHTML = html;

//map
console.log(carrito.map( producto => {
	return 'el prodcuto es ' + producto ;
}));

//object keys
console.log(Object.keys(persona));

//2.16 spread operator

let lenguajes = ['JS', 'PHP', 'Phyton'];
let frameworks = ['React', 'Laravel'];

let combinacion = [...lenguajes,...frameworks];
console.log(combinacion);

//para obtener el ultimo valor del array sin darlo vuelta
let[ultimo] = [...lenguajes].reverse();

console.log(ultimo);
console.log(lenguajes);


function suma(a, b, c){
	console.log(a+b+c);
}

const numeros = [1,2,50];

//para tomar cada uno de los valores del array
suma(...numeros); 

//filter

const mascotas = [
	{nombre:'Jenny', edad: 5, color: 'marron'},
	{nombre:'Cuki', edad: 3, color: 'marron claro'},
	{nombre:'Titan', edad: 2, color: 'naranjita'},
]

const mayores = mascotas.filter ( mascota => {
	return mascota.edad > 2;
});

console.log(mayores);

const jenny = mascotas.find( mascota => {
	return mascota.nombre === 'Jenny';
});

console.log(`Jenny es de color ${jenny.color}`);

let totalEdades = mascotas.reduce((total, mascota) => {
	return (total + mascota.edad);
},0);

console.log(`La edad total es ${totalEdades}`);


//2.18 Promises: para llamadas asincronas

const aplicarDescuento = new Promise((resolve, reject) => {
	setTimeout( () =>{
		let descuento = false;
	
	try{

		if(descuento){
			resolve('Descuento aplicado');
		}else {
			reject('No se pudo aplicar el descuento correctamente');
		}
	}catch{
		throw 'Ha ocurrido un error';
	}
	}, 2000);

});

aplicarDescuento.then(resultado => {
	console.log(resultado);
});


//2.19 Promises con ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
	const apiURL = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

	//llamado ajax
	const ajax = new XMLHttpRequest();

	//abrir la conexion
	ajax.open('GET', apiURL, true);

	//onload

	ajax.onload = () => {
		//si la respuesta es correcta
		if (ajax.status === 200) {
			//se convierte de string a objeto JS
			resolve(JSON.parse(ajax.responseText).results);
		} else {
			//va a traer el error
			reject(Error(ajax.statusText));
		}
	}

	//error
	ajax.oneror = (error) => reject(error);

	//enviar
	ajax.send()

}); 

descargarUsuarios(2)
	.then(
		miembros => mostrarResultados(miembros),
		error => console.error(
			new Error('Hubo un error: ' + error)
		)
	);

//2.20 mostrar resultados
function mostrarResultados(usuarios) {

	let html = '';

	usuarios.forEach(usuario => {
		html +=

			`<li>
			Nombre: ${usuario.name.first} ${usuario.name.last}
			Pais: ${usuario.nat}
			Imagen: <img src="${usuario.picture.medium}">
		</li>
		`;
	});
	contenedor.innerHTML = html;
}


//2.21 clases

class Articulo {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;

	}

	mostrar() {
		return(`El articulo ${this.nombre} cuesta ${this.precio}`);
	}
}

let articulo = new Articulo('Pintura', 80);


console.log(articulo.mostrar());

class ArticuloLimpieza extends Articulo {
	constructor(nombre, precio, descripcion) {
		super(nombre, precio);
		this.descripcion = descripcion;
	}

	mostrar() {
		let mensaje = super.mostrar();
		return `${mensaje} y sirve para ${this.descripcion}`;
	}

}

const escoba = new ArticuloLimpieza('Escoba', 95, 'barrer');

console.log(escoba.mostrar());