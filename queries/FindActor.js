const Actor = require('../models/actor');

/**
 * Finds a single actor in the actor collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the Actor that matches the id
 */
module.exports = _id => {

  //TODO: implement find Actor
    const res =Actor.findById(_id, function(err, story){
                if (err){
                    console.log("errr",err);
                }else{
                    console.log(story);
                }
 });
    return res;
};
