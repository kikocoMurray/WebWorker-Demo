// worker.js
const fibonacci = (n) => {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};
// event listener
// 在 worker 程式中 self 指的是 worker 本身的 instance
self.onmessage = (e) => {
  const number = e.data;
  const result = fibonacci(number);
  console.log(new Date().getTime());
  self.postMessage(result);
};
