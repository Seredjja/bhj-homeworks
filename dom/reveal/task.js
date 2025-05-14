const revealElements = document.querySelectorAll(".reveal");

function isInViewport(element) {
    const viewportHeight = window.innerHeight;
    const rect = element.getBoundingClientRect();

    return (
        (rect.top >= 0 && rect.top <= viewportHeight) || 
        (rect.bottom >= 0 && rect.bottom <= viewportHeight)
    );
}

function handlerScroll() {
    revealElements.forEach(elem => {
        if(isInViewport(elem)) {
            elem.classList.add("reveal_active");
        } else {
            elem.classList.remove("reveal_active");
        }
    });
}

window.addEventListener("scroll", handlerScroll);

handlerScroll();