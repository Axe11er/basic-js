const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
   let counter = 0;
   const [a, b] = [[...s1], [...s2]];
   a.forEach(el => {
      if (b.includes(el)) {
         counter++;
         b.splice(b.indexOf(el), 1);
      }
   });

   return counter;
}

module.exports = {
   getCommonCharacterCount,
};
