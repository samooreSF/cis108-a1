/**
 * Given an array of strings, returns an object whose keys
 * are the individual strings in the input array and the
 * values are the number of times that string appears.
 *
 * @example
 * // returns { 'apple': 2, 'goat': 1, 'potato': 1 }
 * countItems(['apple', 'goat', 'apple', 'potato']);
 *
 * @param {string[]} array - An array of strings
 * @returns {object} An object containing the count of each
 *  string in the input array
 */
function countItems(array) {
  let obj={};
    for (let num of array) {
    obj[num]=0;
    }
    for (let num of array) {
      if(obj.hasOwnProperty(num)) {
        obj[num]+=1;
      }
    }

  return obj;

}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');

  console.log(countItems([1,1,2,2,3,4,4]));
  console.log(countItems([1,22,22,44,4,44,44,567]));
  console.log(countItems(['abc','abc','bb','ba','ba','ba']));

}

module.exports = countItems;
