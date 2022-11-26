const { Schema, model } = require("mongoose");

const postSchema = new Schema({
    url: { type: String, required: true },
    imgUrl: { type: String },
    label: { type: String, required: true },
});

module.exports = model("Post", postSchema);