const { Pool } = require("pg");
//we are requiring the pg package to use only the pool class from it to create a connection pool to the database. This allows us to manage multiple connections to the database and reuse them instead of creating a new connection for each query, which can be inefficient and slow.


//here we are creating an instance of the Pool class from the pg package and passing in an object with the database connection details. These details are being read from environment variables using process.env. This allows us to keep sensitive information of database and  easily change them without modifying the code.
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

//to use it later in other files like controllers to send the queries to the database and get the results back
module.exports = pool;