const express =require('express');
const app = express();
const mongoose =require('mongoose');
const cors= require('cors');
const morgan = require('morgan');
const bodyparcer = require('body-parser');
app.use(bodyparcer.json());
const postrutas=require('./routes/post');
app.use('/servicios',postrutas);
  
mongoose.connect('mongodb+srv://alvarocotrino:lw1IzDZm9wh2QPbO@cluster0.dxd8od2.mongodb.net/lunes?retryWrites=true&w=majority&appName=Cluster0');

const connection = mongoose.connection; // creo conexion a la base de datos mongoDB
connection.once("open", () => {
   console.log("MongoDB conexion exitosa a la base de datos establecida");

});
app.listen(10000);