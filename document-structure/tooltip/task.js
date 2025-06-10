let tooltips = document.querySelectorAll(".has-tooltip");

tooltips.forEach(tooltip => {
    let tooltipElement = document.createElement("div");
    tooltipElement.classList.add("tooltip");
    
    tooltip.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.classList.contains("has-tooltip")) {
            tooltipElement.classList.add("tooltip_active");
            tooltipElement.textContent = event.target.getAttribute("title");
            tooltipElement.style.left = event.target.getBoundingClientRect().left + "px";
            tooltipElement.style.top = event.target.getBoundingClientRect().top + 25 + "px";
            
            event.target.after(tooltipElement);
        };
    });
});

document.addEventListener("scroll", function() {
    if(document.querySelector(".tooltip_active")) {
        document.querySelector(".tooltip_active").classList.remove("tooltip_active");
    };
});