const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  let dog = str.lastIndexOf("@");
  let result = str.slice(dog + 1);
  return result;
}

module.exports = {
  getEmailDomain,
};
