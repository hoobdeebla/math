const server  = require('http').createServer;
const handler = require('finalhandler');
const serve   = require('serve-static');

const port = process.argv[2] || 8080;
server((req, res) => serve('src')(req, res, handler(req, res)))
  .listen(port);
