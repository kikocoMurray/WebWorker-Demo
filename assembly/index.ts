// The entry file of your WebAssembly module.

export function add(a: number, b: number): number {
  return a + b;
}


export function fibonacci(n: i32): i32 {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function hasMapSet(n: i32):  Map<number,string> {
  const hash = new Map<number, string>();
  hash.set(n,'hello');

  return hash
}