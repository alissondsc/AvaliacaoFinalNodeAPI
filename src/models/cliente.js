import Sequelize, { Model } from "sequelize";
import Database from "../config/database.js";

class Cliente extends Model {}

Cliente.init(
  {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING
  },
  {
    sequelize: Database.connection,
    modelName: "clientes"
  }
);

export default Cliente;