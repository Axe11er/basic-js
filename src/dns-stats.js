const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
   const arr = domains.map(el => {
      return el.split('.').reverse();
   });
   const result = {};
   arr.forEach(el => {
      let prop = '';
      el.reduce((acc, el) => {
         prop = `${prop}.${el}`;
         acc[prop] = !acc[prop] ? 1 : acc[prop] + 1;
         return acc;
      }, result);
   });

   return result;
}

module.exports = {
   getDNSStats,
};
