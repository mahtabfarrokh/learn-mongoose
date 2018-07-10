// Todo: Create Actor Model
/* eslint-disable no-unused-vars,prefer-const */
// Todo: Create Actor Model

const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: String ,
    retired: Boolean,
    movies: [Object]
});
const Actor = mongoose.model('Actor', ActorSchema);
module.exports = ActorSchema;
module.exports = Actor;