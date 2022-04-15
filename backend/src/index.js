import Database from './database';
import EventHandler from './event-handler';
import NexaSocket from './nexa-socket';

const {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  NEXA_SOCKET_HOST,
  NEXA_SOCKET_PORT,
} = process.env.NODE_ENV;

class Server {
  constructor() {
    this.database = new Database();
    this.eventHandler = new EventHandler({
      database: this.database,
    });
    this.socket = new NexaSocket({
      eventHandler: this.eventHandler,
    });
  }

  async start() {
    await this.database.connect({
      database: MYSQL_DATABASE,
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
    });

    await this.socket.connect({
      host: NEXA_SOCKET_HOST,
      port: NEXA_SOCKET_PORT,
    });
  }
}

export default Server;
