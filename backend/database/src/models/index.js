import nodes from './nodes.js';
import sensors from './sensors.js';
import trackers from './trackers.js';
import measurements from './measurements.js';

class Models {
  constructor({ sequelize }) {
    this.sequelize = sequelize;

    this.Nodes = nodes({
      sequelize: this.sequelize,
    });
    this.Sensors = sensors({
      sequelize: this.sequelize,
    });
    this.Trackers = trackers({
      sequelize: this.sequelize,
    });
    this.Measurements = measurements({
      sequelize: this.sequelize,
    });
  }

  async init() {
    await this.Nodes.sync();
    await this.Sensors.sync();
    await this.Trackers.sync();
    await this.Measurements.sync();
  }
}

export default Models;
