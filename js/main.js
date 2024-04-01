document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start_game");
  const snake = document.querySelector(".snake");
  const food = document.querySelector(".food-good-svg");
  const gameContainer = document.querySelector(".back-snake-game");

  let snakeX = 30; // Initial X position of the snake
  let snakeY = 80; // Initial Y position of the snake
  const gridSize = 10; // Grid size for movement

  let foodX = 0; // X position of the food
  let foodY = 0; // Y position of the food

  let direction = "right"; // Initial direction of the snake

  let gameInterval; // Interval for game loop

  // Function to generate random position for food
  function generateFoodPosition() {
    foodX =
      Math.floor(Math.random() * (gameContainer.clientWidth / gridSize)) *
      gridSize;
    foodY =
      Math.floor(Math.random() * (gameContainer.clientHeight / gridSize)) *
      gridSize;

    food.style.transform = `translate(${foodX}px, ${foodY}px)`;
  }

  // Function to move the snake
  function moveSnake() {
    switch (direction) {
      case "up":
        snakeY -= gridSize;
        break;
      case "down":
        snakeY += gridSize;
        break;
      case "left":
        snakeX -= gridSize;
        break;
      case "right":
        snakeX += gridSize;
        break;
    }

    snake.style.transform = `translate(${snakeX}px, ${snakeY}px)`;

    // Check for collision with game boundaries
    if (
      snakeX < 0 ||
      snakeY < 0 ||
      snakeX >= gameContainer.clientWidth ||
      snakeY >= gameContainer.clientHeight
    ) {
      endGame();
    }
  }

  // Function to start the game
  function startGame() {
    clearInterval(gameInterval); // Clear any existing game interval
    snakeX = 30;
    snakeY = 80;
    direction = "right";
    gameInterval = setInterval(moveSnake, 200);
    generateFoodPosition();
  }

  // Function to end the game
  function endGame() {
    clearInterval(gameInterval); // Stop the game loop
    alert("Game over!"); // You can customize this message
  }

  startButton.addEventListener("click", startGame);

  // Add event listener for arrow key presses to change direction
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
    }
  });
});
