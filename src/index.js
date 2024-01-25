// 檢查瀏覽器有沒有支援 Web Workers
if (window.Worker) {
  // 建立 worker instance
  const worker = new Worker("worker.js");
  worker.onmessage = (e) => {
    const result = e.data;
    console.log("Result is...", result);
  };
  worker.onerror = (e) => {
    console.log("error");
  };
  document.querySelector("#calculate").onclick = function () {
    console.log("send number to web workers");
    const number = document.querySelector("#number-input").value;

    worker.postMessage(number);
  };
}
