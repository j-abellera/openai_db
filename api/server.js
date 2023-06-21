const express = require('express');
const server = express();
const chatLogRouter = require('./chatLog-router');

server.use(express.json());
server.use('/api/chatlog', chatLogRouter);

server.use('*', (req, res) => res.status(404).json('Page Not Found'));

module.exports = server;