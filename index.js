import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

//crear la app
const app = express();

//routing
app.use("/", usuarioRoutes);

//puerto
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}/`);
});
