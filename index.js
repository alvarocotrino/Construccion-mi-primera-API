const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const postrutas = require('./routes/post');

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Rutas
app.use('/servicios', postrutas);

// Conexión a MongoDB

   //useNewUrlParser: true,
    //useUnifiedTopology: true
mongoose.connect('mongodb+srv://alvarocotrino1:3xw8WfWqoLrn3gEd@cluster0.ulzy08l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB conexion exitosa a la base de datos establecida");
});
connection.on('error', (err) => {
    console.error('Error de conexión a MongoDB:', err);
});

// Escuchar en el puerto
app.listen(10000);