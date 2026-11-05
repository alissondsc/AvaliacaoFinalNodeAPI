import Sequelize, { Model } from "sequelize";
import Database from "../config/database.js";

class Atendimento extends Model {}

Atendimento.init(
  {
    dia: Sequelize.STRING,
    hora: Sequelize.STRING,
    valor: Sequelize.FLOAT,
    concluido: Sequelize.BOOLEAN
  },
  {
    sequelize: Database.db,
    modelName: "atendimentos"
  }
);

export default Atendimento;