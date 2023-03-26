function getNthFib(n) {
  // if (n == 2) {
  //   return 1;
  // } else if (n == 1) {
  //   return 0;
  // } else {
  //   return getNthFib(n - 1) + getNthFib(n - 2)
  // }
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  }
  let c = 3;
  let a = 0;
  let b = 1;
  let sum = 0
  while ( c <= n) {
    sum = a + b;
    a = b;
    b = sum;
    c++;
  }
  return sum;
}
function fibonacci(a, b, c, n) {
  let result = 0;
  let sum = 0;
  if(n == 0 ) {
    return 0;
  } else if (n == 1 ) {
    return 1;
  } else if(c == n) {
    return b;
  } else {
    sum = a + b;
    a = b;
    b = sum;
    c++;
    result = fibonacci(a, b, c, n)
  }
  return result;
}
console.log(getNthFib(1))