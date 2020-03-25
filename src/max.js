/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  // This is your job. :)
  // Don't use the built-in Math.max
  let max=array[0];
  for(let num of array) {
    if(num > max) {
      max = num;

    }

  }
  return max;
}

if (require.main === module) {
  console.log('Running sanity checks for max:');

  console.log('45 is the largest value in the array: ',45 === max([2,43,5,34,35,45]));
  console.log('2 is the largest value in the array: ',2 === max([2,-43,1,-34,-35,-3]));
  console.log('105 is the largest value in the array: ',105 === max([2,-43,1,-34,105,-3]));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = max;
