const Actor = require('../models/actor');

/**
 * Searches through the Actor collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the actor, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
  //TODO: implement search actors
  /**
   * return Object should be like
   * {
      all: [Array of Results],
      count: Number of All Results ,
      offset,
      limit
    }
   *    
   * 
   */

    var f = {};
    console.log('here: ' );
    console.log(criteria);

    if ((criteria.name === "" || criteria.name === undefined)  && criteria.age === undefined && criteria.yearsActive === undefined )
        f = {};
    else if ((criteria.name !== "" && criteria.name !== undefined) && criteria.age === undefined && criteria.yearsActive === undefined)
         f = {name:{$regex :criteria.name}};
    else if ((criteria.name !== "" && criteria.name !== undefined) && criteria.age !== undefined && criteria.yearsActive === undefined)
         f = {name:{$regex :criteria.name}, age:{$lte : criteria.age.max, $gte: criteria.age.min}};
    else if ((criteria.name !== "" && criteria.name !== undefined) && criteria.age !== undefined && criteria.yearsActive !== undefined)
         f = {name:{$regex :criteria.name}, age:{$lte : criteria.age.max, $gte: criteria.age.min},
                yearsActive:{$lte : criteria.yearsActive.max, $gte: criteria.yearsActive.min}};
    else if ((criteria.name === "" || criteria.name === undefined) && criteria.age !== undefined && criteria.yearsActive === undefined)
         f = {age:{$lte : criteria.age.max, $gte: criteria.age.min}};
    else if ((criteria.name === "" || criteria.name === undefined) && criteria.age !== undefined && criteria.yearsActive !== undefined)
         f = {age:{$lte : criteria.age.max, $gte: criteria.age.min},
                yearsActive:{$lte : criteria.yearsActive.max, $gte: criteria.yearsActive.min}};
    else if ((criteria.name === "" || criteria.name === undefined) && criteria.age === undefined && criteria.yearsActive !== undefined)
         f = {yearsActive:{$lte : criteria.yearsActive.max, $gte: criteria.yearsActive.min}};

    var s = {name: 1};
    if (sortProperty ==='name')
        s = {name:1};
    else if (sortProperty ==='age')
        s = {age:1};
    else if (sortProperty ==='movies')
        s = {movies:1};

    console.log('#############');
    console.log(Number(offset));
    console.log(10);
    console.log(f);
    const actors = Actor.find(f).sort(s).skip(offset).limit(limit);
    console.log(actors);
    const counter = Actor.find(f).count();
    return  Promise.all([actors, counter, offset, limit]).then(result => ({ all: result[0], count: result[1],
    offset: result[2], limit:result[3] }));

};
