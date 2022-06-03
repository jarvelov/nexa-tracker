import Database from '@nexa-tracker/database';
import Api from './api.js';

const {
  API_SERVER_PORT,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

class Server {
  constructor() {
    this.database = new Database({
      database: POSTGRES_DATABASE,
      host: POSTGRES_HOST,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
    });

    this.api = new Api({
      database: this.database,
      port: API_SERVER_PORT,
    });
  }

  async start() {
    await this.database.connect();
    await this.api.start();
  }
}

export default Server;
