require("dotenv").config();
//that requires the dotenv package to load environment variables from a .env file into process.env. This allows us to keep sensitive information like database credentials and API keys out of our source code.

const pool = require("./config/db");
//that requires the db.js file from the config folder to get the instance of the Pool class that we created earlier. This allows us to use the pool object to send queries to the database and get results back.


//we are adding the server.js file to start the server and listen for requests
//we are importing the app.js file where we defined the routes for now and we will add middlewares and other configurations in the future
const app = require("./app");

//we are defining the port number for the server to listen to requests
const PORT = process.env.PORT ||3001;

pool.query("SELECT current_database(), current_user")
  .then((result) => {
    console.log("Database connected:", result.rows[0]);
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});