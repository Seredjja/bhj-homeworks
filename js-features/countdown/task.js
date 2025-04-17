
function counterDown() {
    const timer = document.getElementById("timer");
    timer.textContent = "39";
    let counter = 39;

    const intervalId = setInterval(() => {
        timer.textContent = counter;
        counter--;

        if(counter < 0) {
            clearInterval(intervalId);
            timer.textContent = alert("Вы победили в конкурсе!");
        }
    }, 1000);
}

counterDown();