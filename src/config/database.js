import { Sequelize } from 'sequelize'
 
 
class Database {
  constructor() {
    this.init()
  }
     
  init() {
    this.db = new Sequelize({
        dialect: 'postgres',
        database: 'exemplo_ygj8',
        username: 'exemplo_ygj8_user',
        password: 'aXftqEFXy0yLOq1xftRXJkNus9cEvIxu',
        host: 'dpg-dbh8lu61egvs73er86fg-a.oregon-postgres.render.com',
 
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  }
}
export default new Database()