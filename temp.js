function temp(x){
  return new Promise(resolve => {
    resolve(x);
  })
}
console.log(1);
temp(2).then(result => {
  console.log(result);
});
console.log(3);
setTimeout(()=> console.log(4));

