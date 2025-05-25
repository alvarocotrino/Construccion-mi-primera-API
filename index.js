const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const postrutas = require("./routes/post"); // importo las rutas
app.use("/servicios", postrutas);

mongoose.connect(
  "mongodb+srv://alvarocotrino:zf8Vu0JQkqvbqdKj@cluster0.dxd8od2.mongodb.net/lunes?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const connection = mongoose.connection; // creo conexion a la base de datos mongoDB
connection.once("open", () => {
  console.log("MongoDB conexion de la base de datos establecida");
});
connection.on("error", (error) => {
  console.log("Error de conexion a la base de datos", error);
});

app.listen(10000); // puerto por donde escucha