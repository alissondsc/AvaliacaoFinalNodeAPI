import { Router } from "express";
import ClienteController from "../controllers/ClienteController.js";

const routes = new Router();

routes.get("/clientes", ClienteController.listar);
routes.get("/clientes/:id", ClienteController.buscarPorId);
routes.post("/clientes", ClienteController.cadastrar);
routes.put("/clientes/:id", ClienteController.atualizar);
routes.delete("/clientes/:id", ClienteController.excluir);

export default routes;