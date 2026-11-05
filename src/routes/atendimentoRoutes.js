import { Router } from "express";
import AtendimentoController from "../controllers/AtendimentoController.js";

const routes = Router();

routes.get(
  "/atendimentos",
  AtendimentoController.listar
);

routes.get(
  "/atendimentos/:id",
  AtendimentoController.buscarPorId
);

routes.post(
  "/atendimentos",
  AtendimentoController.cadastrar
);

routes.put(
  "/atendimentos/:id",
  AtendimentoController.atualizar
);

routes.delete(
  "/atendimentos/:id",
  AtendimentoController.excluir
);

routes.get(
  "/atendimentos-pendentes",
  AtendimentoController.listarPendentes
);

routes.patch(
  "/atendimentos/:id/concluir",
  AtendimentoController.alterarConclusao
);

export default routes;