
var coreNodes = [];
var nodes = [];
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var running = true;

var node = function() {
  this.width = 12;
  this.height = 12;
  this.x = null;
  this.y = null;
  this.color = "#00aaff";
  this.shape = "circle";
  this.setRandomPosition = function() {
    this.x = getRandomInt(0, canvas.width - this.width);
    this.y = getRandomInt(0, canvas.height - this.height);
  };
  this.draw = function() {
    ctx.fillStyle = this.color;
    if (this.shape == "circle") {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.width/2, 0, 2*Math.PI)
      ctx.fill();
    } else {
      ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    }
  };
};

function createCoreNodes(amount) {
  for (var i = 0; i < amount; i++) {
    coreNodes[i] = new node();
    coreNodes[i].setRandomPosition();
  }
}

function createNode() {
  var newNode = new node();
  newNode.color = "#000";
  newNode.width = 5;
  newNode.height = 5;
  var pos = getRandomInt(0, coreNodes.length)
  newNode.x = (nodes[nodes.length - 1].x + coreNodes[pos].x) / 2
  newNode.y = (nodes[nodes.length - 1].y + coreNodes[pos].y) / 2
  nodes[nodes.length] = newNode;
  newNode.draw();
  return newNode;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function clear() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createCoreNodes(3);
  nodes[0] = new node();
  nodes[0].x = canvas.width/2;
  nodes[0].y = canvas.height/2;
  window.requestAnimationFrame(draw);
}

function draw() {
  clear();

  for (var n in coreNodes) {
    coreNodes[n].draw();
  }

  if (running) {
    createNode();
  }

  window.requestAnimationFrame(draw);
}

init();
