function findAllIndexes(str, char) {
  let result = [];
  str.split("").forEach((e, i) => {
    if (e === char) result.push(i);
  })
  return result;
}
let str = "hello how are you"
let char = "o"
console.log(findAllIndexes(str, char))

