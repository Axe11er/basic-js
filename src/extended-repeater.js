const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(
   str = '',
   {
      repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 1,
      additionSeparator = '|',
   }
) {
   let string = [];
   let substring = [];

   for (let i = 0; i < additionRepeatTimes; i++) {
      substring.push(`${addition}`);
   }
   substring = substring.join(additionSeparator);
   for (let i = 0; i < repeatTimes; i++) {
      string.push(`${str}${substring}`);
   }
   string = string.join(separator);
   return string;
}

module.exports = {
   repeater,
};
