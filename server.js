/**
 * Bootstrap Next.js production server for Plesk hosting.
 */
const {createServer} = require('http');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const hostname = process.env.HOST || '0.0.0.0';

const app = next({
  dev: false,
  hostname,
  port
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res).catch((error) => {
      console.error('Error handling request', error);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
  }).listen(port, hostname, (err) => {
    if (err) {
      console.error('Failed to start Next.js server', err);
      process.exit(1);
    }
    console.log(`Next.js app ready on http://${hostname}:${port}`);
  });
}).catch((error) => {
  console.error('Next.js failed to prepare', error);
  process.exit(1);
});
