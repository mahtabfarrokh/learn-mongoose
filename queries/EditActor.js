const Actor = require('../models/actor');

/**
 * Edits a single actor in the Actors collection
 * @param {string} _id - The ID of the actor to edit.
 * @param {object} actorProps - An object with a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves when the record is edited
 */
module.exports = (_id, actorProps) => {
  //TODO: implement edit Actor

    const res = Actor.findByIdAndUpdate({_id:_id}, actorProps,{isNew:true}, function(err, story){
                if (err){
                    console.log("errr",err);
                    //return done(err, null);
                }else {
                    console.log(story);
                }
 });
    return Actor.findById({_id:_id}, function(err, story){
                if (err){
                    console.log("errr",err);
                    //return done(err, null);
                }else {
                    console.log(story);
                }
 });
};
