//board
let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

//player
let playerWidth = 80;
let playerHeight = 10;
let playerVelocityX = 10;

//json player objek (dictionary)
let player = {
  x: boardWidth / 2 - playerWidth / 2,
  y: boardHeight - playerHeight - 5,
  width: playerWidth,
  height: playerHeight,
  velocityX: playerVelocityX,
};

//ball
let ballWidth = 10;
let ballHeight = 10;
let ballVelocityX = 3;
let ballVelocityY = 2;

//json ball objek (dictionary)
let ball = {
  x: boardWidth / 2,
  y: boardHeight / 2,
  width: ballWidth,
  height: ballHeight,
  velocityX: ballVelocityX,
  velocityY: ballVelocityY,
};

//blocks
let blockArray = [];
let blockWidth = 50;
let blockHeight = 10;
let blockColumns = 8;
let blockRows = 3; //tambah game berlanjut
let maxRows = 10; // limit
let blockCount = 0;

//starting block corner top left
let blockX = 15;
let blockY = 45;

//Score
let score = 0;
let gameOver = false;

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); //draw board

  //membuat player
  context.fillStyle = "lime";
  context.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(update);

  document.addEventListener("keydown", movePLayer);

  //membuat block
  createBlocks();
};

function update() {
  requestAnimationFrame(update);
  if (gameOver) {
    return;
  }
  context.clearRect(0, 0, board.width, board.height);

  //player update
  context.fillStyle = "red";
  context.fillRect(player.x, player.y, player.width, player.height);

  //ball update
  context.fillStyle = "white";
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;
  context.fillRect(ball.x, ball.y, ball.width, ball.height);

  //bounce ball
  if (ball.y <= 0) {
    //top bound
    ball.velocityY *= -1; //-1 reverse
  } else if (ball.x <= 0 || ball.x + ball.width >= boardWidth) {
    //left right bound
    ball.velocityX *= -1; //-1 reverse
  } else if (ball.y + ball.height >= boardHeight) {
    //bottom bound
    //Game over
    context.font = "20px sans-serif";
    context.fillText("Game Over: Press 'Space' to Restart", 80, 400);
    gameOver = true;
  }

  //bounce paddle
  if (topCollosion(ball, player) || bottomCollision(ball, player)) {
    ball.velocityY *= -1; //-1 reverse
  } else if (topCollosion(ball, player) || bottomCollision(ball, player)) {
    ball.velocityX *= -1; //-1 reverse
  }

  //block update
  context.fillStyle = "red";
  for (let i = 0; i < blockArray.length; i++) {
    let block = blockArray[i];
    if (!block.break) {
      if (topCollosion(ball, block) || bottomCollision(ball, block)) {
        block.break = true;
        ball.velocityY *= -1;
        blockCount -= 1;
        score += 100;
      } else if (leftCollision(ball, block) || bottomCollision(ball, block)) {
        block.break = true;
        ball.velocityX *= -1;
        blockCount -= 1;
        score += 100;
      }
      context.fillRect(block.x, block.y, block.width, block.height);
    }
  }
  //next level
  if (blockCount == 0) {
    score += 100 * blockRows * blockColumns; //bonus
    blockRows = Math.min(blockRows + 1, maxRows);
    createBlocks();
  }

  //score
  context.font = "20px sans-serif";
  context.fillText(score, 10, 25);
}

//bounds check
function outOfBounds(xPosition) {
  return xPosition < 0 || xPosition + playerWidth > boardWidth;
}

function movePLayer(e) {
  if (gameOver) {
    if (e.code == "Space") {
      resetGame();
    }
  }

  if (e.code == "ArrowLeft") {
    let nextPlayerX = player.x - player.velocityX;
    if (!outOfBounds(nextPlayerX)) {
      player.x = nextPlayerX;
    }
  } else if (e.code == "ArrowRight") {
    let nextPlayerX = player.x + player.velocityX;
    if (!outOfBounds(nextPlayerX)) {
      player.x = nextPlayerX;
    }
  }
}

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function topCollosion(ball, block) {
  return detectCollision(ball, block) && ball.y + ball.height >= block.y;
}

function bottomCollision(ball, block) {
  return detectCollision(ball, block) && block.y + block.height >= ball.y;
}

function leftCollision(ball, block) {
  return detectCollision(ball, block) && block.x + block.width >= ball.x;
}

function rightCollision(ball, block) {
  return detectCollision(ball, block) && block.x + block.width >= ball.x;
}

function createBlocks() {
  blockArray = []; // clear
  // i = kolom, j = baris
  for (let i = 0; i < blockColumns; i++) {
    for (let j = 0; j < blockRows; j++) {
      let block = {
        x: blockX + i * blockWidth + i * 10,
        y: blockY + j * blockHeight + j * 10,
        width: blockWidth,
        height: blockHeight,
        break: false,
      };
      blockArray.push(block);
    }
  }
  blockCount = blockArray.length;
}

function resetGame() {
  gameOver = false;
  player = {
    x: boardWidth / 2 - playerWidth / 2,
    y: boardHeight - playerHeight - 5,
    width: playerWidth,
    height: playerHeight,
    velocityX: playerVelocityX,
  };

  ball = {
    x: boardWidth / 2,
    y: boardHeight / 2,
    width: ballWidth,
    height: ballHeight,
    velocityX: ballVelocityX,
    velocityY: ballVelocityY,
  };

  blockArray = [];
  blockRows = 3;
  score = 0;
  createBlocks();
}
