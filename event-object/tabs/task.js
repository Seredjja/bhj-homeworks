const tabElement = document.getElementsByClassName("tab");
const tab__contentElement = document.getElementsByClassName("tab__content");

for (let i = 0; i < tabElement.length; i++) {
    const indexElement = tabElement[i];
    const indexContentElement = tab__contentElement[i];
    
    indexElement.addEventListener("click", function() {
        for (let j = 0; j < tabElement.length; j++) {
            tabElement[j].classList.remove("tab_active");
            tab__contentElement[j].classList.remove("tab__content_active");
        };
        
        indexElement.classList.add("tab_active");
        indexContentElement.classList.add("tab__content_active");
    });
}


