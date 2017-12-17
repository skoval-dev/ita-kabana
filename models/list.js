"use strict";
const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name: String,
    _board: {
        type: mongoose.Schema.Types.ObjectId,
        rel: "Board",
        required: true
    }
});

schema.set("toJSON", {versionKey: false});

const List = mongoose.model("List", schema);

module.exports = List;