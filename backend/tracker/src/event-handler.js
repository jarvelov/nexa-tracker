class EventHandler {
  constructor({ database }) {
    this.database = database;
  }

  async getNodeId({ nexaId }) {
    const node = await this.database.models.Nodes.findOne({
      where: {
        nexaId,
      },
    });

    if (node === null) {
      return false;
    }

    const { id } = node;

    return id;
  }

  async getSensorId({ sensorName }) {
    const sensor = await this.database.models.Sensors.findOne({
      where: {
        name: sensorName,
      },
    });

    if (sensor === null) {
      return false;
    }

    const { id } = sensor;

    return id;
  }

  async onEvent({ nexaId, sensorName, timestamp, value }) {
    const [nodeId, sensorId] = await Promise.all([
      this.getNodeId({
        nexaId,
      }),
      this.getSensorId({
        sensorName,
      }),
    ]);

    if (nodeId && sensorId) {
      this.saveEvent({
        nodeId,
        sensorId,
        timestamp,
        value,
      });
    }
  }

  async saveEvent({ nodeId, sensorId, timestamp, value }) {
    this.database.models.Measurements.create({
      node: nodeId,
      sensor: sensorId,
      timestamp,
      value,
    });
  }
}

export default EventHandler;
