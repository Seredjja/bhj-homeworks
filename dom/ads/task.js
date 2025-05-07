const phrases = document.querySelectorAll(".rotator__case");
let currentPhrase = 0;
let speedTimer = phrases[currentPhrase].dataset.speed;;
let timeoutId = null;


(function rotate() {
    phrases[currentPhrase].classList.remove("rotator__case_active");
    currentPhrase = (currentPhrase + 1) % phrases.length;
    phrases[currentPhrase].classList.add("rotator__case_active");
    phrases[currentPhrase].style.color = phrases[currentPhrase].dataset.color;
    speedTimer = phrases[currentPhrase].dataset.speed;
    clearTimeout(timeoutId);
    timeoutId = setInterval(rotate, Number(speedTimer));
})();