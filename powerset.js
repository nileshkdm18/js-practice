function powerset(array) {
  let result = [];
  helper(array, result);
  return result;
}

function helper(array, result) {
  result.push([]);
  for(let a of array){
    result.push([a])
  }
  for(let i = 0; i <= array.length - 1; i++) {
    for (let j = i + 1; j <= array.length - 1; j++) {
      result.push([array[i], array[j]])
    }
  }
  result.push(array)
}

console.log(powerset([1, 2, 3, 4]));