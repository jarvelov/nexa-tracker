import measurements from './measurements.js';

class Endpoints {
  constructor({ app, database }) {
    app.get('/api', (req, res) => {
      res.json({
        success: true,
      });
    });

    app.post(
      '/api/measurements',
      measurements({
        app,
        database,
      }),
    );
  }
}

export default Endpoints;
