"use strict";
const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name: String
});

schema.set("toJSON", {versionKey: false});

const Board = mongoose.model("Board", schema);

module.exports = Board;