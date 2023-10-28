/* eslint-disable no-empty */

// eslint-disable-next-line no-unused-vars
function wait() {
  for (let i = 0; i < 10_000_000_000; i++) {}
}

console.log('Line 1');
console.log('Line 2');
// Bloqueante wait();
setTimeout(() => console.log('Line 3'), 3000);
console.log('Line 3');
setTimeout(() => console.log('Line 4'), 0);
setTimeout(() => console.log('Line 5'), 2500);
console.log('Line 6');
console.log('Line 7');
console.log('Line 8');
