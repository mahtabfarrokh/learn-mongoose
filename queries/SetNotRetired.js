const Actor = require('../models/actor');

/**
 * Sets a group of Actors as not retired
 * @param {array} _ids - An array of the _id's of of actors to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = _ids => {
  //TODO: implement here

    const res = Actor.updateMany({_id:_ids}, {retired:false}, function(err, story){
                if (err){
                    console.log("errr",err);
                    //return done(err, null);
                }else {
                    console.log(story);
                }
 });
    return Actor.findById(_ids, function(err, story){
                if (err){
                    console.log("errr",err);
                    //return done(err, null);
                }else {
                    console.log(story);
                }
 });

};
