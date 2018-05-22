(function () {

  let random = Math.round(Math.random() % 2);

  let echo = function () {
      setTimeout(function () {
        echo();
        console.log(random.toString() + "\n");
      }, 10);
  }
  echo();
})();