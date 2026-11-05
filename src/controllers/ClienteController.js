import Cliente from "../models/cliente.js";

class ClienteController {

  async listar(req, res) {
    const clientes = await Cliente.findAll();
    return res.json(clientes);
  }

  async buscarPorId(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);

    if (!cliente) {
      return res.status(404).json({
        mensagem: "Cliente não encontrado"
      });
    }

    return res.json(cliente);
  }

  async cadastrar(req, res) {
    const cliente = await Cliente.create(req.body);

    return res.status(201).json(cliente);
  }

  async atualizar(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);

    if (!cliente) {
      return res.status(404).json({
        mensagem: "Cliente não encontrado"
      });
    }

    await cliente.update(req.body);

    return res.json(cliente);
  }

  async excluir(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);

    if (!cliente) {
      return res.status(404).json({
        mensagem: "Cliente não encontrado"
      });
    }

    await cliente.destroy();

    return res.json({
      mensagem: "Cliente removido com sucesso"
    });
  }
}

export default new ClienteController();
``