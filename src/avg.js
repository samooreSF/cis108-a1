let sum = require('./sum');

/**
 * Returns the average of the numbers in the input array.
 *
 * Use your own sum function, required above. Assume that
 * the input array is non-empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The average
 */
function avg(array) {
  return sum(array)/array.length;

}

if (require.main === module) {
  console.log('Running sanity checks for avg:');

  console.log('Expected output is true: ',4===avg([4,4]))
  console.log('Expected output is true: ',6===avg([4,5,6,7,8]))
  console.log('Expected output is true: ',21.5===avg([43,32,7,4]))


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avg;
