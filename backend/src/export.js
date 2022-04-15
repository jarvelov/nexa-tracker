import fs from 'fs/promises';
import { stringify } from 'csv-stringify';

const nodes = [
  {
    id: 1066,
    name: 'Värmeröret',
    capabilities: ['temperature'],
  },
  {
    id: 1093,
    name: 'Växthus',
    capabilities: ['temperature', 'humidity'],
  },
  {
    id: 1096,
    name: 'Altan Vägg',
    capabilities: ['temperature', 'humidity'],
  },
];

const headers = nodes.reduce(
  (headers, { id, capabilities }) => [
    ...headers,
    ...capabilities.map((capability) => `${id} ${capability}`),
  ],
  ['date'],
);

function writeRow(data) {
  const filename = './output.csv';
  if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, stringify([headers]));
  }

  fs.writeFileSync(filename, stringify(data), { flag: 'a' });
}

function formatMessage(message) {
  const messageHeader = `${message.sourceNode} ${message.name}`;

  const row = headers.map((header) => {
    if (header === 'date') {
      return `${message.time}`;
    }

    if (header === messageHeader) {
      return `${message.value}`;
    }

    return '';
  });

  return [row];
}



// const data = formatMessage({
//   value: 2.4,
//   sourceNode: 1096,
//   fromWS: false,
//   time: "2022-04-01T12:07:08+0200",
//   name: "temperature",
// });

// writeRow(data);
