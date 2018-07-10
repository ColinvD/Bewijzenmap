const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let targets = [];

let waypointAmount = 10;
let waypointVectors = [];
let waypointBalls = [];

let pathLines = [];

let playerAmount = 20;
let playerSpeed = 1;
let players = [];
let playersOposite = [];

for (var i = 0; i < waypointAmount; i++) { //create all the waypoint vectors
  waypointVectors[i] = new Vector2(Math.floor(Math.random() * 800),Math.floor(Math.random() * 450));
  targets[i] = waypointVectors[i];
}

for (var i = 0; i < waypointVectors.length; i++) { //create all visual waypoints
  waypointBalls[i] = new Point(waypointVectors[i].dx, waypointVectors[i].dy, 10);
}

for (var i = 0; i < waypointBalls.length; i++) { //make the empty vectors for the path that they take
  pathLines[i] = new Vector2();
}

for (var i = 0; i < playerAmount; i++) { //make all the players with all the needed variables
  let randomNumber = Math.floor(Math.random() * waypointAmount);
  players[i] = {};
  players[i].vector = new Vector2(waypointVectors[randomNumber].dx,waypointVectors[randomNumber].dy);
  players[i].bal = new Point(players[i].vector.dx, players[i].vector.dy, 8);
  players[i].targetNumber = Math.floor(Math.random() * waypointAmount);
  players[i].target = {};
  players[i].target = targets[players[i].targetNumber];
  players[i].vel = new Vector2(0,0);
  players[i].dis = new Vector2(0,0);
  players[i].vel.subtractVector(players[i].target, players[i].vector);
  players[i].vel.r = playerSpeed;
}

for (var i = 0; i < playerAmount; i++) { //make all the opositePlayers with all the needed variables
  let randomNumber = Math.floor(Math.random() * waypointAmount);
  playersOposite[i] = {};
  playersOposite[i].vector = new Vector2(waypointVectors[randomNumber].dx,waypointVectors[randomNumber].dy);
  playersOposite[i].bal = new Point(playersOposite[i].vector.dx, playersOposite[i].vector.dy, 8);
  playersOposite[i].targetNumber = Math.floor(Math.random() * waypointAmount);
  playersOposite[i].target = {};
  playersOposite[i].target = targets[playersOposite[i].targetNumber];
  playersOposite[i].vel = new Vector2(0,0);
  playersOposite[i].dis = new Vector2(0,0);
  playersOposite[i].vel.subtractVector(playersOposite[i].target, playersOposite[i].vector);
  playersOposite[i].vel.r = playerSpeed;
}

function animationLoop() {
  requestAnimationFrame(animationLoop);
  context.clearRect(0,0,800,450);

  for (var i = 0; i < players.length; i++) { //move the players
    players[i].vector.add(players[i].vel);
    players[i].bal.x = players[i].vector.dx;
    players[i].bal.y = players[i].vector.dy;
  }

  for (var i = 0; i < players.length; i++) { //move the opositePlayers
    playersOposite[i].vector.add(playersOposite[i].vel);
    playersOposite[i].bal.x = playersOposite[i].vector.dx;
    playersOposite[i].bal.y = playersOposite[i].vector.dy;
  }

  for (var i = 0; i < waypointBalls.length; i++) { //draw the waypoints
    waypointBalls[i].draw();
  }

  for (var i = 0; i < pathLines.length; i++) { //draw the path
    let startvalue = i;
    let endvalue = i + 1;
    if(endvalue >= waypointBalls.length){
      endvalue = 0;
    }
    pathLines[i].dx = waypointBalls[endvalue].x - waypointBalls[startvalue].x;
    pathLines[i].dy = waypointBalls[endvalue].y - waypointBalls[startvalue].y;
    pathLines[i].draw(context, waypointBalls[i].x, waypointBalls[i].y, 1, "#ff00ff");
  }

  for (var i = 0; i < players.length; i++) { //draw players and check if they reached their target and change the target if reached
    players[i].bal.draw();
    players[i].vel.draw(context, players[i].vector.dx, players[i].vector.dy, 20);
    players[i].dis.subtractVector(players[i].target, players[i].vector);
    if(players[i].dis.r < 2){
      players[i].targetNumber++;
      if(players[i].targetNumber >= targets.length){
        players[i].targetNumber = 0;
      }
      players[i].target = targets[players[i].targetNumber];
      players[i].vel.subtractVector(players[i].target,players[i].vector);
      players[i].vel.r = playerSpeed;
    }
  }

  for (var i = 0; i < players.length; i++) { //draw opositePlayers and check if they reached their target and change the target if reached
    playersOposite[i].bal.draw();
    playersOposite[i].vel.draw(context, playersOposite[i].vector.dx, playersOposite[i].vector.dy, 20);
    playersOposite[i].dis.subtractVector(playersOposite[i].target, playersOposite[i].vector);
    if(playersOposite[i].dis.r < 2){
      playersOposite[i].targetNumber--;
      if(playersOposite[i].targetNumber < 0){
        playersOposite[i].targetNumber = targets.length-1;
      }
      playersOposite[i].target = targets[playersOposite[i].targetNumber];
      playersOposite[i].vel.subtractVector(playersOposite[i].target,playersOposite[i].vector);
      playersOposite[i].vel.r = playerSpeed;
    }
  }
}

animationLoop();
