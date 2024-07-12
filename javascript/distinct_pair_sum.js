function distinctPairSum(arr, k) {
  const returnArr = []
  const seenPairs = new Set()
  const newArr = arr
  while (newArr.length > 1) {
    for (let i = 1; newArr.length > i; ++i) {
      const sum = newArr[0] + newArr[1];
      const sumArr = [newArr[0], newArr[1]]
      if (sum === k) {
        const pairString = sumArr.join('')
        if (!seenPairs.has(pairString)) {
          seenPairs.add(pairString);
          returnArr.push(sumArr);
        }
        newArr.shift()
      }
      newArr.shift();
    }
  }
  return returnArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution

// iteraties through the array, and if the number and the last number equals k it adds to that array
