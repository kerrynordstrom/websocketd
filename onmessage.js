(function () {
  ws.onmessage = function (event) {
    draw(event.data)
    document.getElementById('count').textContent = event.data
  };
})();