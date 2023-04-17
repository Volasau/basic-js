const { NotImplementedError } = require("../extensions/index.js");

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const onenext = "--discard-next";
  const oneprev = "--discard-prev";
  const bdnext = "--double-next";
  const bdprev = "--double-prev";
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === onenext) {
      i++;
    } else if (arr[i] === oneprev) {
      if (newArr.length > 0) {
        newArr.pop();
      }
    } else if (arr[i] === bdnext) {
      if (i < arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === bdprev) {
      if (i > 0 && arr[i - 2] !== onenext) {
        newArr.push(arr[i - 1]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
module.exports = {
  transform,
};
