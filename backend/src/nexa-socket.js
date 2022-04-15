import EventEmitter from 'events';
import WebSocket from 'ws';

const NEXA_JSON_MESSAGE_START_CHARACTER = '{';

class NexaSocket extends EventEmitter {
  constructor({ eventHandler }) {
    super();

    this.eventHandler = eventHandler;
  }

  async connect({ host, port }, settings) {
    return new Promise((resolve) => {
      this.websocket = new WebSocket(`ws://${host}:${port}`, {
        perMessageDeflate: false,
        ...settings,
      });

      this.websocket.on('open', () => {
        this.websocket.on('close', this.onClose);
        this.websocket.on('message', this.onMessage);

        resolve();
      });
    });
  }

  onMessage(payload) {
    const data = Buffer.from(payload).toString();
    const parsedData = this.parseData(data);

    if (parsedData) {
      const event = this.formatToEvent(data);

      this.eventHandler.onEvent(event);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  parseData(data) {
    const offsetIndex = data.indexOf(NEXA_JSON_MESSAGE_START_CHARACTER);

    if (offsetIndex !== -1) {
      const offsetData = data.substring(offsetIndex);

      try {
        return JSON.parse(offsetData);
      } catch (error) {
        return null;
      }
    }

    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  formatToEvent(data) {
    const {
      sourceNode: nexaId,
      time: timestamp,
      name: sensorName,
      value,
    } = data;

    return {
      nexaId,
      sensorName,
      timestamp,
      value,
    };
  }
}

export default NexaSocket;
