const express = require('express');
const conectarDatabase = require('./config/db')
//crear el servidor
const app = express();

//conectar a la base de datos
conectarDatabase();

//habilitar express.json
app.use(express.json({extended: true}));

// puerto de la app
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/materia', require('./routes/materia'));
app.use('/api/tarea', require('./routes/tarea'));


//definir la pagina principal
app.get('/', (request, response)=> {
    response.send('Hola')
})

//iniciar servidor
app.listen(PORT,() => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})