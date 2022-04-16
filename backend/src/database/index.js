import { Sequelize } from 'sequelize';
import Models from './models/index.js';

class Database {
  constructor({
    database,
    host,
    password,
    username,
  }) {
    this.sequelize = new Sequelize(database, username, password, {
      dialect: 'postgres',
      host,
    });

    this.models = new Models({
      sequelize: this.sequelize,
    });
  }

  async connect() {
    await this.sequelize.authenticate();
    await this.models.init();
  }
}

export default Database;
