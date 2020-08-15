// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'pgsql',
        database: 'thirdware'
    }
},

  staging: {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'pgsql',
        database: 'thirdware'
    }
},

  production: { client: 'pg',
  connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'pgsql',
      database: 'thirdware'
  }
   ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
