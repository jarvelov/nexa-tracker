import Api from './api/index.js';
import Database from './database/index.js';
import EventHandler from './event-handler.js';
import NexaSocket from './nexa-socket.js';

const {
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  NEXA_SOCKET_HOST,
  NEXA_SOCKET_PORT,
  API_SERVER_PORT,
} = process.env;

class Server {
  constructor() {
    this.database = new Database({
      database: POSTGRES_DATABASE,
      host: POSTGRES_HOST,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
    });

    this.eventHandler = new EventHandler({
      database: this.database,
    });

    this.socket = new NexaSocket({
      eventHandler: this.eventHandler,
    });

    this.api = new Api({
      database: this.database,
      port: API_SERVER_PORT,
    });
  }

  async start() {
    await this.database.connect();

    await this.socket.connect({
      host: NEXA_SOCKET_HOST,
      port: NEXA_SOCKET_PORT,
    });

    await this.api.start();
  }
}

export default Server;
