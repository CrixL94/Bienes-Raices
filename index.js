import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

//crear la app
const app = express();

//habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

//carpeta publica
app.use(express.static('public'));

//routing
app.use("/auth", usuarioRoutes);


//puerto
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}/`);
});
