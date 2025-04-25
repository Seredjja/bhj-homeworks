const dropdown__valueElement = document.getElementsByClassName("dropdown__value").item(0);
const dropdown__listElement = document.getElementsByClassName("dropdown__list").item(0);
const dropdown__itemElement = document.getElementsByClassName("dropdown__item");
const dropdown__linkElement = document.getElementsByClassName("dropdown__link");

dropdown__valueElement.addEventListener("click", function() {
    if(dropdown__listElement.classList.contains("dropdown__list_active")) {
        dropdown__listElement.classList.remove("dropdown__list_active");
    } else {
        dropdown__listElement.classList.add("dropdown__list_active");
    }
});

for (let i = 0; i < dropdown__itemElement.length; i++) {
    dropdown__itemElement[i].addEventListener("click", function() {
        dropdown__listElement.classList.remove("dropdown__list_active");
        dropdown__valueElement.textContent = dropdown__linkElement[i].textContent;
    });
}

for (let i = 0; i < dropdown__linkElement.length; i++) {
    dropdown__linkElement[i].addEventListener('click', (event) => {
        event.preventDefault()
    });
}