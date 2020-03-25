/**
 * Given an object whose entries have numbers as values,
 * return the key with the largest value.
 *
 * @example
 * maxKey({a: 10, b: -4, c: 20}); // => 'c'
 *
 * @param {object} array - A non-empty array of numbers
 * @returns {number} The key with the largest value
 */
function maxKey(obj) {
  let array = [];
  for(var key in obj) {
    array.push(obj[key]);
  }
  let max = Math.max(...array);

  for(var key in obj) {
    if(obj[key] === max) {
      return key;
    }

  }
}



if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
  console.log('The expected output is correct: ','c'===maxKey({a:10,c:45,b:44}));
  console.log('The expected output is correct: ','z'===maxKey({a:10,z:120,b:45,d:109}));
  console.log('The expected output is correct: ','a'===maxKey({a:107,z:102,b:99,d:19}));


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = maxKey;
