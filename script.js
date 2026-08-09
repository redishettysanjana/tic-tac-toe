let currentPlayer = "X";
const cells = document.querySelectorAll('.cell');

cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
        cell.textContent = currentPlayer;
        if (currentPlayer === "X") {
            currentPlayer = "O";
        }
        else {
            currentPlayer = "X";
        }
    });
});