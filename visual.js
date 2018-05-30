let ws = new WebSocket('ws://localhost:8080/');
let Queue = require('./queue');

let queue = new Queue();

  let draw = (eventData) => {
    // console.log('added to queue', queue);
    let canvas = document.getElementById('randomizer');
    let cW = canvas.width;
    let cH = canvas.height;
    
    let ctx = canvas.getContext('2d');
    let imageData = ctx.getImageData(0, 0, cW, cH);
    let buf = new ArrayBuffer(imageData.data.length);
    let buf8 = new Uint8ClampedArray(buf);
    let data = new Uint32Array(buf);
    
    let j = 0;
    for (let i = 0; i < data.length; i += 4) {
      let value = event.data === '0' ? 255 : 0;
      data[j] =
        (255 << 24) |    // alpha
        (value << 16) |    // blue
        (value << 8) |    // green
        value;            // red
      j++;
  }

  imageData.data.set(buf8);
  ctx.putImageData(imageData, 0, 0);
  }


$(document).ready(function () {
  ws.onmessage = function (event) {
    queue.enqueue(event.data);
    console.log(queue);
    draw(queue.dequeue());
    document.getElementById('count').textContent = event.data
  };

});
