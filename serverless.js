const app = require('./api/index');
const server = require('vercel-http')(app);

module.exports = server;
