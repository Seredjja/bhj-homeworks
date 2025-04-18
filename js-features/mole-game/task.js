let dead = 0;
let lost = 0;

function updateScore() {
    document.getElementById("dead").textContent = dead;
    document.getElementById("lost").textContent = lost;
}

function resetGame() {
    dead = 0;
    lost = 0;
    updateScore();
}

function checkGame() {
    if(dead > 9) {
        alert("Победа!");
        resetGame();
    } else if(lost > 4) {
        alert("Вы проиграли!");
        resetGame();
    }
}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.addEventListener("click", function() {
        if(hole.classList.contains("hole_has-mole")) {
            dead++;
            hole.classList.remove("hole_has-mole");
        } else {
            lost++;
        }

        updateScore();
        checkGame();
    });
}