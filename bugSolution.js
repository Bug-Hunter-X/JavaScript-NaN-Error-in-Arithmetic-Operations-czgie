function foo(a, b) {
  a = a ?? 0; // Use nullish coalescing operator
  b = b ?? 0; // Use nullish coalescing operator
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(null, 3)); // Output: 6
console.log(bar(undefined, 3)); // Output: 6