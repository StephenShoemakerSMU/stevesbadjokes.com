const {Pool} = require('pg');

exports.pool = new Pool({
    host: 'postgres',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DB,
    max:20
});