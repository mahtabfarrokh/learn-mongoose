const Actor = require('../models/actor');

/**
 * Finds a single actor in the actor collection.
 * @param {object} actorProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Actor that was created
 */
module.exports = actorProps => {
  return new Actor(actorProps).save();
};
