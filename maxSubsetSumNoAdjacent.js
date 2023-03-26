function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  let result = 0;
  sum(array, result)
  return result;
}
function sum(array, result) {
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
}
console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))