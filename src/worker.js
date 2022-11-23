 (function () {
  self.onconnect = function (e) {
      const port = e.ports[0];

      port.onmessage = function (event) {
          port.postMessage({type: 'message', data: "SharedWorker is alive!"});
      };

      port.start();

  };

  self.onerror = function (error) {
      console.error('Error', error);
  };

  self.onclose = function () {
      console.log('SharedWorker closed');
  };
}());
