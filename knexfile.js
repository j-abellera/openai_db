// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/chatLog.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './data/chatLog.db3',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/chatLog.db3',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  }

};
