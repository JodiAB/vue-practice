<template>
  
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>

export default {
  data() {
    return {
      canvas: null,
      context: null,
      stars: [],
    };
  },
  mounted() {
    this.initializeCanvas();
    this.generateStars();
    this.animateStars();
  },
  methods: {
    initializeCanvas() {
      this.canvas = this.$refs.canvas;
      this.context = this.canvas.getContext('2d');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },
    generateStars() {
      const numStars = Math.floor(window.innerWidth * window.innerHeight * 0.00015);

      for (let i = 0; i < numStars; i++) {
        this.stars.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.5, // Adjust speed as needed
          speedY: (Math.random() - 0.5) * 0.5, // Adjust speed as needed
        });
      }
    },
    animateStars() {
      const update = () => {
        this.moveStars();
        this.drawStars();
        requestAnimationFrame(update);
      };
      update();
    },
    moveStars() {
      for (const star of this.stars) {
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around when stars go out of the canvas
        if (star.x < 0) star.x = this.canvas.width;
        if (star.x > this.canvas.width) star.x = 0;
        if (star.y < 0) star.y = this.canvas.height;
        if (star.y > this.canvas.height) star.y = 0;
      }
    },
    drawStars() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (const star of this.stars) {
        this.context.fillStyle = 'white';
        this.context.beginPath();
        this.context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        this.context.fill();
      }
    },
  },
};
</script>

<style scoped>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
