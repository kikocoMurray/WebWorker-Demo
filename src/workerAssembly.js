(async () => {
  const importObject = {
    env: {
      // 當 WebAssembly 調用失敗時，會觸發此函式
      abort(_msg, _file, line, column) {
        console.error("abort called at index.ts:" + line + ":" + column);
      },
    },
  };
  const { module, instance } = await WebAssembly.instantiateStreaming(
    fetch("../build/release.wasm"),
    importObject
  );

  const { fibonacci } = instance.exports;

  self.onmessage = (e) => {
    const number = e.data;
    const result = fibonacci(number);
    self.postMessage(result);
  };
})();
