function draw() {
  var canvas = document.getElementById('randomizer');
  var ctx = canvas.getContext('2d');
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  var randomize = function () {
    let random = () => Math.round(Math.random() % 2);
    let fill;
    (random() === 1) ? fill = 255 : fill = 0;
    for (var i = 0; i < data.length; i += 4) {
      data[i] = fill;     // red
      data[i + 1] = fill; // green
      data[i + 2] = fill; // blue
    }
    console.log(imageData);
    ctx.putImageData(imageData, 0, 0);
  };

  var randomizebtn = document.getElementById('randomizebtn');
  randomizebtn.addEventListener('click', randomize);
}

$(function () {
  draw();
})