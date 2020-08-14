const connection=  require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'pgsql',
        database: 'thirdware'
    }
})



module.exports = connection;