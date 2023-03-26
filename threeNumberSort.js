function threeNumberSort(array, order) {
  // Write your code here.
  let pos = 0;
  for (let i = 0; i <= order.length - 1; i++) {
    for (let j = pos; j <= array.length - 1; j++) {
      if (order[i] === array[j]) {
        let temp = array[pos];
        array[pos] = array[j];
        array[j] = temp;
        pos++;
      }
    }
  }
  return array;
}

console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]))