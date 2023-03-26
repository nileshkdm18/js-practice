function addRungs(rungs, dist) {
  let c = 0;
  for (let i = 0; i < rungs.length; i++) {
    let diff = 0;
    if (i == 0) diff = rungs[i] - 0;
    else diff = rungs[i] - rungs[i - 1];
    if (diff > dist) c += Math.ceil(diff / dist) - 1
  }
  return c;
}
console.log(addRungs([1, 3, 5, 10], 2))
console.log(addRungs([3, 6, 8, 10], 3))
console.log(addRungs([3, 4, 6, 7], 2))
console.log(addRungs([5], 10))