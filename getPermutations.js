function getPermutations(array) {
  if(array.length == 0) return [];
  let ps = [];
  helper(array,[],ps)
  return ps;
}
function helper(arr, p, ps) {
  if(arr.length == 0) {
    ps.push(p);
  } else {
    for(let i = 0; i < arr.length; i ++) {
      let newArr = [...arr].splice(i, 1);
      // newArr = newArr.slice(0, i).concat(newArr.slice(i + 1, newArr.length));
      newArr.splice(i,1);
      let newP = [...p];
      newP.push(arr[i])
      helper(newArr, newP, ps)
    }
   }
}

console.log(getPermutations([1,2,3]))