let currentPlayer = "X";
let gameOver = false;

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".status");

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

cells.forEach(function(cell) {

    cell.addEventListener("click", function() {

        // Don't allow clicking an already filled cell
        // or clicking after the game is over
        if (cell.textContent !== "" || gameOver) {
            return;
        }

        // Put X or O
        cell.textContent = currentPlayer;

        checkWinner();

        // If someone won, don't switch the player
        if (gameOver) {
            return;
        }

        // Switch player
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

        // Update turn text
        statusText.textContent = `Player ${currentPlayer}'s turn`;

    });

});

function checkWinner() {

    winningCombinations.forEach(function(combination) {

        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        if (
            cells[a].textContent !== "" &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {

            statusText.textContent = `Player ${cells[a].textContent} wins!`;

            gameOver = true;
        }

    });

}