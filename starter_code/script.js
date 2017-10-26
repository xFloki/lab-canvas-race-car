window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();

  };

  function startGame() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 600, 700);
    ctx.fillStyle = "grey";
    ctx.fillRect(50, 0, 500, 700);

    ctx.fillStyle = "white";
    ctx.fillRect(70, 0, 20, 700);
    ctx.fillRect(510, 0, 20, 700);


    ctx.beginPath();
    ctx.setLineDash([20, 20]);
    ctx.moveTo(300, 0);
    ctx.lineTo(300 , 700);
    ctx.stroke();

    base_image = new Image();
    base_image.src = 'images/car.png';
    base_image.onload = function(){
    ctx.drawImage(base_image, 275, 550, 50, 100);
    }
  }
};
