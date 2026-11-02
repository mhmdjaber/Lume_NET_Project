const express = require('express');
const app = express();
//start adding the 1st route auth we are getting the router that we exported from authRoutes.js
const authRoutes = require("./routes/authRoutes");
//now we are telling the app to use the authRoutes for any request that starts with /api/auth 
//in the rotes we will define the endpoints for authentication like login, logout, me. 
app.use("/api/auth", authRoutes);

//start adding the 2nd route user we are getting the router that we exported from userRoutes.js
const userRoutes = require("./routes/userRoutes");
//now we are telling the app to use the userRoutes for any request that starts with /api/users
//in the rotes we will define the endpoints for user management like create user, get user, update user, delete user.
app.use("/api/users", userRoutes);



const subscriberRoutes = require("./routes/subscriberRoutes");
//now we are telling the app to use the subscriberRoutes for any request that starts with /api/subscribers
//in the rotes we will define the endpoints for subscriber management like create subscriber, get subscriber, update subscriber, delete subscriber.
app.use("/api/subscribers", subscriberRoutes);



const subscriptionRoutes = require("./routes/subscriptionRoutes");
app.use("/api/subscriptions", subscriptionRoutes);

const onuRoutes = require("./routes/onuRoutes");
app.use("/api/onus", onuRoutes);


const packageRoutes = require("./routes/packageRoutes");
//now we are telling the app to use the packageRoutes for any request that starts with /api/packages
//in the rotes we will define the endpoints for package management like create package, get package, update package, delete package.
app.use("/api/packages", packageRoutes);

//there are more 3 routes i will add later paymentRoutes , splitterRoutes ,and splitterportRoutes
//and the dashboard ones



//we used that to use this module in other files like server.js where we will start the server and listen to the requests.
module.exports = app;
