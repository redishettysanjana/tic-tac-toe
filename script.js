let currentPlayer = "X";
let gameOver = false;
let xScore = 0;
let oScore = 0;
let drawScore = 0;

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".status");
const restartButton = document.querySelector(".restart-btn");
const resetScoreButton = document.querySelector(".reset-score-btn");
const resultMessage = document.querySelector(".result-message");
const board = document.querySelector(".board");

const xScoreText = document.querySelector("#x-score");
const oScoreText = document.querySelector("#o-score");
const drawScoreText = document.querySelector("#draw-score");

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function (cell) {

    cell.addEventListener("click", function () {

        if (cell.textContent !== "" || gameOver) {
            return;
        }

        cell.textContent = currentPlayer;

        checkWinner();

        checkDraw();

        if (gameOver) {
            return;
        }

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

        statusText.textContent = `Player ${cells[a].textContent} wins!`;
        statusText.classList.add("win");

    });

});

function checkWinner() {

    winningCombinations.forEach(function (combination) {

        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        if (
            cells[a].textContent === cells[b].textContent &&
            cells[b].textContent === cells[c].textContent &&
            cells[a].textContent !== ""
        ) {
            statusText.textContent = "Game Over!";

            resultMessage.textContent = `Player ${cells[a].textContent} wins!`;
            resultMessage.style.display = "block";

            if (cells[a].textContent === "X") {
                xScore++;
                xScoreText.textContent = xScore;
            } else {
                oScore++;
                oScoreText.textContent = oScore;
            }

            gameOver = true;
            board.classList.add("game-over");
        }

    });

}

function checkDraw() {

    let allFilled = true;

    cells.forEach(function (cell) {

        if (cell.textContent === "") {
            allFilled = false;
        }

    });

    if (allFilled && !gameOver) {
        statusText.textContent = "Game Over!";
        resultMessage.textContent = "It's a draw!";
        resultMessage.style.display = "block";
        statusText.classList.add("draw");

        drawScore++;
        drawScoreText.textContent = drawScore;

        gameOver = true;
        board.classList.add("game-over");
    }

}

restartButton.addEventListener("click", function () {

    cells.forEach(function (cell) {
        cell.textContent = "";

        cell.classList.remove("winner", "x", "o");
    });

    currentPlayer = "X";
    gameOver = false;

    statusText.textContent = "Player X's turn";
    statusText.classList.remove("win", "draw");
    resultMessage.style.display = "none";
    board.classList.remove("game-over");

});

resetScoreButton.addEventListener("click", function () {
    xScore = 0;
    oScore = 0;
    drawScore = 0;

    xScoreText.textContent = xScore;
    oScoreText.textContent = oScore;
    drawScoreText.textContent = drawScore;
});