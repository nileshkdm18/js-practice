function quickSort(array) {
  sort(array, 0, array.length - 1);
  return array;
}

function sort(array, s, e) {
  if(s >= e) return;
  let p = s;
  let l = p + 1;
  let r = e;
  while (r >= l) {
    if (array[l] > array[p] && array[r] < array[p]) {
      swap(array, l, r)
    };
    if (array[l] <= array[p]) {
      l++;
    }
    if (array[r] >= array[p]) {
      r--;
    }
  }
  swap(array, r, p)
  // let isLeftSmall = r - 1 - s < e - (r + 1)
  // if (isLeftSmall) {
    sort(array, s, r -1)
    sort(array, r + 1, e)
  // } else {
  //   sort(array, r + 1, e)
  //   sort(array, s, r - 1)
  // }
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(quickSort([8, 5, 2, 9, 5, 6, 3]))