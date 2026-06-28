const board = document.getElementById("board");
const puzzle = [
5,3,"","",7,"","","","",
6,"","",1,9,5,"","","",
"",9,8,"","","","",6,"",
8,"","","",6,"","","",3,
4,"","",8,"",3,"","",1,
7,"","","",2,"","","",6,
"",6,"","","","",2,8,"",
"","","",4,1,9,"","",5,
"","","","",8,"","",7,9
];
const originalPuzzle = [...puzzle];
const solution = [
5,3,4,6,7,8,9,1,2,
6,7,2,1,9,5,3,4,8,
1,9,8,3,4,2,5,6,7,
8,5,9,7,6,1,4,2,3,
4,2,6,8,5,3,7,9,1,
7,1,3,9,2,4,8,5,6,
9,6,1,5,3,7,2,8,4,
2,8,7,4,1,9,6,3,5,
3,4,5,2,8,6,1,7,9
];
const puzzle2 = [
"","",3,6,"",8,9,1,2,
6,7,"",1,9,5,3,"",8,
1,9,8,3,4,2,5,6,7,
8,5,9,7,6,1,4,2,3,
4,2,6,8,5,3,7,9,1,
7,1,3,9,2,4,8,5,6,
9,6,1,5,3,7,2,8,4,
2,8,7,4,1,9,6,3,5,
3,4,5,2,8,6,1,7,""
];

function createBoard() {
    board.innerHTML = "";

    for (let i = 0; i < 81; i++) {
        const cell = document.createElement("input");
        cell.type = "text";
        cell.maxLength = 1;

        cell.addEventListener("input", function () {
            this.value = this.value.replace(/[^1-9]/g, "");
        });
        cell.value = puzzle[i];

if (puzzle[i] !== "") {
    cell.readOnly = true;
    cell.style.background = "#e9ecef";
    cell.style.fontWeight = "bold";
}

        board.appendChild(cell);
    }
}

createBoard();
let seconds = 0;

setInterval(function () {
    seconds++;

    let minutes = Math.floor(seconds / 60);
    let sec = seconds % 60;

    document.getElementById("timer").innerText =
        String(minutes).padStart(2, "0") + ":" +
        String(sec).padStart(2, "0");
}, 1000);
document.getElementById("checkBtn").addEventListener("click", function () {

    const cells = document.querySelectorAll("#board input");
    let correct = true;
    cells.forEach((cell, index) => {

    if (cell.value == solution[index]) {
        cell.style.backgroundColor = "#90EE90"; // Green
    } else {
        cell.style.backgroundColor = "#FFB6C1"; // Red
        correct = false;
    }
});
if (correct) {
    document.getElementById("message").innerText = "🎉 Congratulations! You solved the Sudoku!";
    
} else {
    document.getElementById("message").innerText = "❌ Some answers are incorrect.";
}
});
document.getElementById("resetBtn").addEventListener("click", function () {

    for (let i = 0; i < puzzle.length; i++) {
        puzzle[i] = originalPuzzle[i];
    }
    seconds = 0;
    document.getElementById("message").innerText = "Game Reset!";

    createBoard();
    document.getElementById("message").innerText = "Game Reset!";
});
document.getElementById("newBtn").addEventListener("click", function () {

    for (let i = 0; i < puzzle.length; i++) {
        puzzle[i] = puzzle2[i];
    }
    seconds = 0;
    document.getElementById("message").innerText = "00:00";

    createBoard();
    document.getElementById("message").innerText = "New Game Started!";

});