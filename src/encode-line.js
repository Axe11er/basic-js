const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
   const arr = [...str];
   let counter = 1;
   const result = arr.reduce((acc, el, idx) => {
      const next = arr[idx + 1];
      if (arr[idx] === next) counter++;
      else {
         acc += `${counter > 1 ? counter : ''}${el}`;
         counter = 1;
      }
      return acc;
   }, '');

   return result;
}

module.exports = {
   encodeLine,
};
