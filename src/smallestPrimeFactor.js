/**
 * Given a number, return its smallest prime factor. If a
 * number is prime, return that number itself.
 *
 * @example
 * smallestPrimeFactor(2); // => 2
 * smallestPrimeFactor(4); // => 2
 * smallestPrimeFactor(21); // => 3
 * smallestPrimeFactor(91); // => 7
 *
 * @param {number} num - A number
 * @returns {number} The smallest prime factor of num
 */
function isPrime(num) {
  if(num===1){
    return false;
  }
  if(num===2) {
    return true;
  }
  for(var i=2;i<num;i++){
    if(num%i===0){
      return false;
    }

  }
  return true;
}
function smallestPrimeFactor(num) {
  if(isPrime(num)){
    return num;
  }
  for(let i = 1; i<num;i++ ) {
    if (num%i===0) {
      if(isPrime(i)){
        return i;
      }
    }
  }
}

if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');

  console.log('Expected output is correct', 2===smallestPrimeFactor(36));
  console.log('Expected output is correct', 3===smallestPrimeFactor(39));
  console.log('Expected output is correct', 7===smallestPrimeFactor(91));
  console.log('Expected output is correct', 3===smallestPrimeFactor(21));




  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = smallestPrimeFactor;
