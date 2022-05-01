const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   let max = 0;
   const arr = n.toString().split('');
   arr.forEach((_, idx1) => {
      const compare = +arr.filter((_, idx2) => idx1 !== idx2).join('');
      max = max > compare ? max : compare;
   });

   return max;
}

module.exports = {
   deleteDigit,
};
