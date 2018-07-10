const Actor = require('../models/actor');

/**
 * Finds the lowest and highest yearsActive of actors in the Actor collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  // const minQuery = Actor.find({}).sort({'yearsActive': -1}).exec( function(err, doc) {
  //     if (err) throw err;
  //     var min = doc.last_mod;
  //     });
  // const maxQuery = Actor.find({}).sort({'yearsActive': 1}).exec( function(err, doc) {
  //     if (err) throw err;
  //     var max = doc.last_mod;
  //     });
  //
  // return Promise.all([minQuery, maxQuery]).then(yearsActives => ({ min: yearsActives[0], max: yearsActives[1] }));

    var minQuery = Actor.find({})
    .sort({ yearsActive: 1 })
    .limit(1)
    .then(actor => actor[0].yearsActive);

    const maxQuery = Actor.find({})
    .sort({ yearsActive: -1 })
    .limit(1)
    .then(actor => actor[0].yearsActive);

    return Promise.all([minQuery, maxQuery]).then(yearsActives => ({ min: yearsActives[0], max: yearsActives[1]}));
}
