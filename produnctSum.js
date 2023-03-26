function productSum(array) {
  // Write your code here.
  return add(array , 1)
}
function add(array, multiplier) {
  let sum = 0;
  for(let i of array) {
    if(Array.isArray(i)) {
      sum +=  add(i, multiplier + 1)
    } else {
      sum += i;
    }
  }
  return sum * multiplier;
}
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))