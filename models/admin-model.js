const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false }
});

module.exports = model("Admin", adminSchema);