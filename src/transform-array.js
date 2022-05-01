const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
   if (!Array.isArray(arr))
      throw new Error(`'arr' parameter must be an instance of the Array!`);

   const result = arr.reduce((acc, el, idx, arr) => {
      switch (el) {
         case '--double-next':
            acc[idx] = arr[idx + 1];
            break;
         case '--discard-next':
            acc[idx] = undefined;
            arr[idx + 1] = undefined;
            break;
         case '--double-prev':
            acc[idx] = acc[idx - 1];
            break;
         case '--discard-prev':
            acc[idx] = undefined;
            acc[idx - 1] = undefined;
            break;
         default:
            acc[idx] = el;
      }
      return acc;
   }, []);

   return result.filter(el => typeof el !== 'undefined');
}

module.exports = {
   transform,
};
