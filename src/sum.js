/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  let sum =0;
  for (let num of array) {
    sum+=num;
  }
  return sum;
}


if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log('Should all be true!!!');


  console.log('Expected output is correct: ',15===sum([4,5,3,2,1]));
  console.log('Expected output is correct: ', 0=== sum([]));
  console.log('Expected output is correct: ',45===sum([4,15,3,20,3]));



  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
