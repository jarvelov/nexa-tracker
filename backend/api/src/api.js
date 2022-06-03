import cors from 'cors';
import express from 'express';
import Endpoints from './endpoints/index.js';

class Api {
  constructor({ database, port }) {
    this.database = database;
    this.port = port;

    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());

    this.endpoints = new Endpoints({
      app: this.app,
      database: this.database,
    });
  }

  start() {
    return new Promise((resolve, reject) => {
      try {
        this.app.listen(this.port, () => {
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default Api;
