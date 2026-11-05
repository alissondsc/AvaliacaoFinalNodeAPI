import Atendimento from "../models/atendimento.js";

class AtendimentoController {

  async listar(req, res) {

    const atendimentos = await Atendimento.findAll();

    return res.json(atendimentos);
  }

  async buscarPorId(req, res) {

    const atendimento = await Atendimento.findByPk(
      req.params.id
    );

    if (!atendimento) {
      return res.status(404).json({
        mensagem: "Atendimento não encontrado"
      });
    }

    return res.json(atendimento);
  }

  async cadastrar(req, res) {

    const atendimento = await Atendimento.create(
      req.body
    );

    return res.status(201).json(atendimento);
  }

  async atualizar(req, res) {

    const atendimento = await Atendimento.findByPk(
      req.params.id
    );

    if (!atendimento) {
      return res.status(404).json({
        mensagem: "Atendimento não encontrado"
      });
    }

    await atendimento.update(req.body);

    return res.json(atendimento);
  }

  async excluir(req, res) {

    const atendimento = await Atendimento.findByPk(
      req.params.id
    );

    if (!atendimento) {
      return res.status(404).json({
        mensagem: "Atendimento não encontrado"
      });
    }

    await atendimento.destroy();

    return res.json({
      mensagem: "Atendimento removido"
    });
  }


  async listarPendentes(req, res) {

    const atendimentos = await Atendimento.findAll({
      where: {
        concluido: false
      }
    });

    return res.json(atendimentos);
  }

 
  async alterarConclusao(req, res) {

    const atendimento = await Atendimento.findByPk(
      req.params.id
    );

    if (!atendimento) {
      return res.status(404).json({
        mensagem: "Atendimento não encontrado"
      });
    }

    atendimento.concluido = !atendimento.concluido;

    await atendimento.save();

    return res.json(atendimento);
  }

}

export default new AtendimentoController();