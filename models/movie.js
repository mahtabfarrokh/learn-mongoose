// Todo: create Movie Schema

const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
    title: String,
      date: String,
      numberActors: Number,
      image: String,
      revenue: Number
});
const Actor = mongoose.model('Actor', ActorSchema);
module.exports = ActorSchema;
module.exports = Actor;