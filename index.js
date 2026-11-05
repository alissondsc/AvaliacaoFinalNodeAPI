import express from "express";
import "./src/config/database.js";

import routes from "./src/routes/clienteRoutes.js";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});