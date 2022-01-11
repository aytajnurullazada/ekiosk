<template>
  <canvas id="canvas"></canvas>
</template>

<script>
export default {
  mounted() {
    var canvas = document.getElementById("canvas");


    // some hotfixes... ( ≖_≖)

    // get canvas 2D context and set him correct size
    var ctx = canvas.getContext("2d");

    resize();

    // last known position
    var pos = { x: 0, y: 0 };

    window.addEventListener("resize", resize);
    document.querySelector('.section-canvas').addEventListener("mousemove", draw);
    document.querySelector('.section-canvas').addEventListener("mousedown", setPosition);
    document.querySelector('.section-canvas').addEventListener("mouseenter", setPosition);

    // new position from mouse event
    function setPosition(e) {
      pos.x = e.pageX;
      pos.y = e.pageY - (document.body.clientHeight) + document.querySelector('.section-canvas').clientHeight + 10;
    }

    // resize canvas
    function resize() {
      ctx.canvas.width = document.querySelector('.section-canvas').clientWidth;
      ctx.canvas.height = document.body.querySelector(".section-canvas").clientHeight;
    }
    ctx.save();
    function draw(e) {
      // mouse left button must be pressed

      ctx.beginPath(); // begin

      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#5387ed";

      ctx.moveTo(pos.x, pos.y); // from
      setPosition(e);
      ctx.lineTo(pos.x, pos.y); // to

      ctx.stroke(); // draw it!
    }

    function clearRect(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    function fadeOut() {
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setTimeout(fadeOut, 100);
      setTimeout(clearRect, 100);
    }

    fadeOut();
  },
};
</script>

<style  scoped>
#canvas{
  opacity: 1;
}
</style>