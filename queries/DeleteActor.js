const Actor = require('../models/actor');

/**
 * Deletes a single actor from the Actors collection
 * @param {string} _id - The ID of the actor to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = _id => {
  //TODO: implement delete Actor
    return Actor.findByIdAndRemove({_id:_id}, function(err, story){
                if (err){
                    console.log("errr",err);
                    //return done(err, null);
                }else{
                    console.log(story);
                }

 });
};
