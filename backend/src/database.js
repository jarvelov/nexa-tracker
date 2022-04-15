import mysql from 'mysql';

class Database {
  constructor({ host, user, password }) {
    this.connection = mysql.createConnection({
      host,
      user,
      password,
    });
  }

  beginTransaction() {
    return new Promise((resolve, reject) => {
      this.connection.beginTransaction((error) => {
        if (error) {
          return reject(new Error(error));
        }

        return resolve(null);
      });
    });
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.connection.connect((error) => {
        if (error) {
          return reject(new Error(error));
        }

        return resolve(null);
      });
    });
  }

  commit() {
    return new Promise((resolve, reject) => {
      this.connection.commit((error) => {
        if (error) {
          return reject(new Error(error));
        }

        return resolve(null);
      });
    });
  }

  rollback() {
    return new Promise((resolve, reject) => {
      this.connection.rollback((error) => {
        if (error) {
          return reject(new Error(error));
        }

        return resolve(null);
      });
    });
  }

  query(query) {
    return new Promise((resolve, reject) => {
      this.connection.query(query, (error, results, fields) => {
        if (error) {
          return reject(new Error(error));
        }

        return resolve(results, fields);
      });
    });
  }
}

export default Database;
