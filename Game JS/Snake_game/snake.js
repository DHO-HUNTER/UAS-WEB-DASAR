//board
let block_size = 25;
let rows = 20;
let cols = 20;
let board;
let context;

//snake
let snakeX = block_size * 5;
let snakeY = block_size * 2;
let velocityX = 0;
let velocityY = 0;
let snake_body = [];

//food
let foodX;
let foodY;

let game_over = false;

//load game
window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * block_size;
  board.width = cols * block_size;
  context = board.getContext("2d"); // draw board

  place_food();
  document.addEventListener("keyup", change_direction);
  //update();
  setInterval(update, 1500 / 10); //milisecond
};

//membuat board, snake, dan food saat dipanggil
function update() {
  if (game_over) {
    return;
  }

  //board
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  //food
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, block_size, block_size);

  if (snakeX == foodX && snakeY == foodY) {
    snake_body.push([foodX, foodY]);
    place_food();
  }

  for (let i = snake_body.length - 1; i > 0; i--) {
    snake_body[i] = snake_body[i - 1];
  }

  if (snake_body.length) {
    snake_body[0] = [snakeX, snakeY];
  }

  //snake
  context.fillStyle = "lime";
  snakeX += velocityX * block_size;
  snakeY += velocityY * block_size;
  context.fillRect(snakeX, snakeY, block_size, block_size);
  for (let i = 0; i < snake_body.length; i++) {
    context.fillRect(
      snake_body[i][0],
      snake_body[i][1],
      block_size,
      block_size
    );
  }

  //kondisi game over
  if (
    snakeX < 0 ||
    snakeX >= cols * block_size ||
    snakeY < 0 ||
    snakeY >= rows * block_size
  ) {
    game_over = true;
    velocityX = 0;
    velocityY = 0;
    alert("Game Over!");
    window.location.reload();
  }

  for (let i = 0; i < snake_body.length; i++) {
    if (snakeX == snake_body[i][0] && snakeY == snake_body[i][1]) {
      game_over = true;
      velocityX = 0;
      velocityY = 0;
      alert("Game Over!");
      window.location.reload();
    }
  }
}

//movement
function change_direction(e) {
  if (e.code == "ArrowUp" && velocityY != 1 && game_over == false) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && velocityY != -1 && game_over == false) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft" && velocityX != 1 && game_over == false) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -1 && game_over == false) {
    velocityX = 1;
    velocityY = 0;
  }
}

//penempatan food secara random
function place_food() {
  foodX = Math.floor(Math.random() * cols) * block_size;
  foodY = Math.floor(Math.random() * rows) * block_size;
}
