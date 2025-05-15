const fontSizeControls = document.querySelector(".book__control_font-size");
const bookElement = document.getElementById("book");

fontSizeControls.addEventListener("click", function(event) {
    event.preventDefault();

    const allSizeButtons = this.querySelectorAll(".font-size");
    allSizeButtons.forEach(button => {
        button.classList.remove("font-size_active");
    });

    event.target.classList.add("font-size_active");

    bookElement.classList.remove("book_fs-big", "book_fs-small");

    if(event.target.dataset.size === "small") {
        bookElement.classList.add("book_fs-small");
    } else if (event.target.dataset.size === "big") {
        bookElement.classList.add("book_fs-big");
    }
});