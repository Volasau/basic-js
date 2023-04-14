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
    arr[i];
    // console.log(arr[i]);
    if (
      arr[i] !== onenext &&
      arr[i] !== oneprev &&
      arr[i] !== bdnext &&
      arr[i] !== bdprev
    ) {
      newArr.push(arr[i]);
    }
    if (arr[i] === bdnext) {
      newArr.push(arr[i + 1]);
    }
    if (arr[i] === bdprev) {
      newArr.push(arr[i - 1]);
    }
    if (arr[i] === onenext) {
      i++;
      newArr.push(arr[i - 1]);
      newArr.pop();
    }
    if (arr[i] === oneprev) {
      newArr.pop(arr[i - 1]);
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
