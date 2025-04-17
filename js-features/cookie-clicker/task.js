const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("speed__counter");

let count = 1;
let lastClickTime = null;

function clickCookie() {
    if(cookie.width > 160) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }

    counter.textContent = count;
    count++;

    const currentTime = new Date();
    const timeDiff = (currentTime - lastClickTime) / 1000;
    const clicksPerSecond = 1 / timeDiff;
    speed.textContent = clicksPerSecond.toFixed(2);
    lastClickTime = currentTime;
}

cookie.onclick = clickCookie;