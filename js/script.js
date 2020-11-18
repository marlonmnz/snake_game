//Background
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//Cobrinha

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarCobra(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}



// Movimentos
let direction = "right";


// Start Game

function iniciarJogo(){
    criarBG();
    criarCobra(); 
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction =="down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);






