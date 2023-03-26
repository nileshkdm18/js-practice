function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// function factorial(n) {
//   let sum = 1;
//   while (n > 1) {
//   sum *= n;
//   n--;
//   }
//   return sum;
// }


console.log(factorial(5))