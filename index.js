import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import postrutas from "./routes/post.js"; // importo las rutas
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
mongoose.connect(
  "mongodb+srv://alvarocotrino:zf8Vu0JQkqvbqdKj@cluster0.dxd8od2.mongodb.net/lunes?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const connection = mongoose.connection; // creo conexion a la base de datos mongoDB
connection.once("open", () => {
  console.log("MongoDB conexion exitosa a la base de datos establecida");
  app.use("/servicios", postrutas); // Usar las rutas solo después de la conexión exitosa
  app.listen(10000); // puerto por donde escucha
});
connection.on("error", (error) => {
  console.log("Error de conexion a la base de datos", error);
});


app.listen(10000);