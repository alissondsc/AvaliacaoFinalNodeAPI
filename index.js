import express from "express";
import "./src/config/database.js";

import clienteRoutes from "./src/routes/clienteRoutes.js";
import atendimentoRoutes from "./src/routes/atendimentoRoutes.js";

const app = express();

app.use(express.json());

app.use(clienteRoutes);
app.use(atendimentoRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});