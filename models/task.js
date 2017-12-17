"use strict";
const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name: String,
    description: String,
    _list: {
        type: mongoose.Schema.Types.ObjectId,
        rel: "List",
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

schema.set("toJSON", {versionKey: false});

const Task = mongoose.model("Task", schema);

module.exports = Task;