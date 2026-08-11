let currentPlayer = "X";

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".status");

cells.forEach(function(cell) {

    cell.addEventListener("click", function() {

        if (cell.textContent !== "") {
            return;
        }

        // Put X or O
        cell.textContent = currentPlayer;

        // Switch player
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

        // Update text
        statusText.textContent = `Player ${currentPlayer}'s turn`;

    });

});