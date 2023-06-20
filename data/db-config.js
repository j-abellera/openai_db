const knex = require('knex');
const configs = require('../knexfile');
const environment = process.NODE_ENV || 'development';

module.exports = knex(configs[environment]);