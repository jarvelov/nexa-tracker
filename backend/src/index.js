import Server from './server.js';

try {
  const server = new Server();
  server.start();
} catch (error) {
  console.error(error);
}
