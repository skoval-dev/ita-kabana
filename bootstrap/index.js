"use strict"
const mongoose = require("mongoose");
const connectionUrl = "mongodb://localhost:27017/Kanban";

mongoose.Promise = global.Promise;

mongoose.connect(connectionUrl,{useMongoClient: true})
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
});
