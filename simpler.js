let ws = new WebSocket('ws://localhost:8080/');
let Queue = require('./queue');

let queue = new Queue();

$(document).ready(function () {

// let random = () => Math.round(Math.random() % 2);...

function draw(eventData) {
  let canvas = document.getElementById('randomizer');
  let ctx = canvas.getContext('2d');
  let cW = canvas.width;
  let cH = canvas.height;
  let imageData = ctx.getImageData(0, 0, cW, cH);
  let data = imageData.data;
  let fill;
  (eventData === 1) ? fill = 255 : fill = 0;
  
    for (let i = 0; i < data.length; i += 4) {
      data[i] = fill;     // red
      data[i + 1] = fill; // green
      data[i + 2] = fill; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  console.log(data);
  }

  ws.onmessage = function (event) {
    queue.enqueue(event.data);
    // console.log(queue);
    draw(queue.dequeue());
    // console.log('after dequeue:', queue);
    document.getElementById('count').textContent = event.data
  };
});



// for (let j = 0; j <= canvasHeight; j++) {
//   for (let k = 0; k <= canvasWidth; k++) {
//     let fill;
//     (random() === 1) ? fill = 255 : fill = 0;
//     xCoord = j;
//     yCoord = k;
//     let colorIndices = getColorIndicesForCoord(xCoord, yCoord, canvasWidth);

//     let redIndex = colorIndices[0];
//     let greenIndex = colorIndices[1];
//     let blueIndex = colorIndices[2];
//     let alphaIndex = colorIndices[3];

//     let redForCoord = imageData.data[redIndex];
//     let greenForCoord = imageData.data[greenIndex];
//     let blueForCoord = imageData.data[blueIndex];
//     let alphaForCoord = imageData.data[alphaIndex];

//   }
// }
// });

// function getColorIndicesForCoord(x, y, width) {
//   let red = y * (width * 4) + x * 4;
//   return [red, red + 1, red + 2, red + 3];
// }

// let xCoord = 0;
// let yCoord = 0;

// let canvasHeight = 100;
// let canvasWidth = 800;
