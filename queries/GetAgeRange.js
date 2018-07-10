const Actor = require('../models/actor');
/**
 * Finds the lowest and highest age of actors in the Actor collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  //   var temp = 20 ;
  //   var counter = Actor.count().exec( function(err, doc) {
  //     if (err){
  //
  //     console.log('vaaaaaaaaaa');
  //     temp = 0 ;
  //     throw err;
  //     }
  //
  //
  //     });
  //   var minQuery ;
  //   if (temp === 0 ) minQuery = 0 ;
  //   else
  //   minQuery = Actor.find().sort({'age': -1}).limit(1).exec( function(err, doc) {
  //     if (err) {
  //
  //         console.log('here :(');
  //         console.log(counter);
  //          throw err;
  //     }
  //     });
  // var maxQuery;
  // if (temp === 0 ) maxQuery = 101 ;
  //   else
  // maxQuery= Actor.find().sort({'age': 1}).limit(1).exec(function(err, doc) {
  //     if (err) {
  //         console.log('here :(');
  //         throw err;
  //     }
  //
  //     });
  // // console.log("here:" , counter);
  // return Promise.all([minQuery, maxQuery]).then(ages => ({ min: ages[0], max: ages[1] }));

    var minQuery = Actor.find({})
    .sort({ age: 1 })
    .limit(1)
    .then(actor => actor[0].age);

    const maxQuery = Actor.find({})
    .sort({ age: -1 })
    .limit(1)
    .then(actor => actor[0].age);

    return Promise.all([minQuery, maxQuery]).then(ages => ({ min: ages[0], max: ages[1] }));

}
