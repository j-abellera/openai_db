const express = require('express');
const server = express();
const cors = require('cors');
const chatLogRouter = require('./chatLog-router');

server.use(cors());
server.use(express.json());
server.use('/api/chatlog', chatLogRouter);

server.use('*', (req, res) => res.status(404).json('Page Not Found'));

module.exports = server;