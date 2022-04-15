class EventHandler {
  constructor({
    database,
  }) {
    this.database = database;
  }

  async getNodeId({ nexaId }) {
    const [nodes] = await this.database.query(
      'SELECT id FROM nodes WHERE nexaId = ?',
      nexaId,
    );

    if (nodes.length === 0) {
      return false;
    }

    const [{ id }] = nodes;

    return id;
  }

  async getSensorId({ sensorName }) {
    const [sensors] = await this.database.query(
      'SELECT id FROM sensors WHERE name = ?',
      sensorName,
    );

    if (sensors.length === 0) {
      return false;
    }

    const [{ id }] = sensors;

    return id;
  }

  async handleEvent({ nexaId, sensorName, timestamp }) {
    const nodeId = this.getNodeId({ nexaId });
    const sensorId = this.getSensorId({ sensorName });

    if (nodeId && sensorId) {
      this.saveEvent({
        nodeId,
        sensorId,
        timestamp,
      });
    }

    return true;
  }

  async onEvent(event) {
    if (event) {
      this.handleEvent(event);
    }
  }

  async saveEvent({ nodeId, sensorId, timestamp }) {
    this.database.query(
      'INSERT INTO nodes (`node`, `sensor`, `timestamp`) VALUES (?, ?, ?)',
      nodeId,
      sensorId,
      timestamp,
    );
  }
}

export default EventHandler;
