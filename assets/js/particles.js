var canvas = document.getElementById("particles");
var ctx = canvas.getContext("2d");
var nodes = [];

class Node {
  constructor() {
    this.color = '#fff5cc';
    this.radius = 2;
    this.pos = {x: -100, y: -100};
    this.vel = {
      x: Math.random() + .2,
      y: Math.random() + .2
    };
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
    ctx.fill()
  }

  updatePosition() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  offScreen() {
    if (this.pos.x - this.radius > canvas.width) {
      return true;
    }
    if (this.pos.y - this.radius > canvas.height) {
      return true;
    }
  }
}

(function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 50; i++) {
    nodes[i] = new Node();
    nodes[i].pos.x = Math.random() * (canvas.width - nodes[i].radius);
    nodes[i].pos.y = Math.random() * (canvas.height - nodes[i].radius);
  }

  window.requestAnimationFrame(draw);
})();

function draw() {
  clear();
  drawNodes();
  window.requestAnimationFrame(draw);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawNodes() {
  if (nodes.length < 50) {
    nodes.push(new Node());
  }
  for (let node in nodes) {
    nodes[node].draw();
    nodes[node].updatePosition();
    if (nodes[node].offScreen()) {
      nodes.splice(node, 1);
    }
  }
}

window.onresize = (event) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
