function startSharedWorker() {
  // eslint-disable-next-line no-undef
  const sharedWorkerURL = './worker.js';

  const sharedWorker = new SharedWorker(sharedWorkerURL, 'SharedWorker1');
  sharedWorker.onerror = (err) => console.log(err);
  sharedWorker.port.onmessage = (msg) => console.log(`Message received from SharedWorker: "${msg.data.data}"`);
  sharedWorker.port.onmessageerror = (err) => console.log(err);
  sharedWorker.port.start();

  return sharedWorker;
};

const worker = startSharedWorker();

setInterval(() => { 
  worker.port.postMessage({ type: 'message', data: 'Hello from main thread' })
}, 1000);