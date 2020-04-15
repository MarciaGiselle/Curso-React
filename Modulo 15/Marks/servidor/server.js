const express = require('express');
const conectarDatabase = require('./config/db')
//crear el servidor
const app = express();

//conectar a la base de datos
conectarDatabase();

// puerto de la app
const PORT = process.env.PORT || 4000;

//definir la pagina principal
app.get('/', (request, response)=> {
    response.send('Hola Mundo')
})

//iniciar servidor
app.listen(PORT,() => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})