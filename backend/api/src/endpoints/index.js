import measurements from './measurements.js';
import sensors from './sensors.js';
import nodes from './nodes.js';
import trackers from './trackers.js';

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

    app.post(
      '/api/sensors',
      sensors({
        app,
        database,
      }),
    );

    app.post(
      '/api/nodes',
      nodes({
        app,
        database,
      }),
    );

    app.post(
      '/api/trackers',
      trackers({
        app,
        database,
      }),
    );
  }
}

export default Endpoints;
