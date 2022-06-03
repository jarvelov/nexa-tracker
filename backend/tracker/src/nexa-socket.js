import WebSocket from 'ws';
import moment from 'moment';

const NEXA_JSON_MESSAGE_START_CHARACTER = '{';

class NexaSocket {
  constructor({ eventHandler }) {
    this.eventHandler = eventHandler;
  }

  async connect({ host, port }, settings) {
    return new Promise((resolve) => {
      this.websocket = new WebSocket(`ws://${host}:${port}`, {
        perMessageDeflate: false,
        ...settings,
      });

      this.websocket.on('open', () => {
        this.websocket.on('message', this.onMessage.bind(this));

        resolve(null);
      });
    });
  }

  onMessage(payload) {
    const data = Buffer.from(payload).toString();
    const parsedData = this.parseData(data);

    if (parsedData) {
      console.log(JSON.stringify(parsedData, null, 2));
      if ('sourceNode' in parsedData) {
        const event = this.formatToEvent(parsedData);

        this.eventHandler.onEvent(event);
      }
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
    const { sourceNode: nexaId, name: sensorName, time, value } = data;

    const timestamp = moment.utc(time).toISOString();

    return {
      nexaId,
      sensorName,
      timestamp,
      value,
    };
  }
}

export default NexaSocket;
