const incElems = document.querySelectorAll(".product__quantity-control_inc");
const decElems = document.querySelectorAll(".product__quantity-control_dec");

let productAddElements = document.querySelectorAll(".product__add");

decElems.forEach(elemDec => {
    elemDec.addEventListener("click", function() {
        const valueElem = this.closest(".product__quantity-controls").querySelector(".product__quantity-value");
        let counter = parseInt(valueElem.textContent);
        
        if (counter > 1) {
            counter--;
            valueElem.textContent = counter;
        };
    });
});

incElems.forEach(elemInc => {
    elemInc.addEventListener("click", function() {
        const valueElem = this.closest(".product__quantity-controls").querySelector(".product__quantity-value");
        let counter = parseInt(valueElem.textContent);
        
        counter++;
        valueElem.textContent = counter;
    });
});

productAddElements.forEach(addElem => {
    addElem.addEventListener("click", function() {
        const cartProductElement = document.createElement("div");
        cartProductElement.classList.add("cart__product");
        const cartProductElementDataId = this.closest(".product").dataset.id;
        cartProductElement.dataset.id = cartProductElementDataId;

        const cartProductImage = document.createElement("img");
        cartProductImage.classList.add("cart__product-image");
        const cartProductEleentImageSrc = this.closest(".product").querySelector(".product__image").src
        cartProductImage.setAttribute("src", cartProductEleentImageSrc);

        const cartProductCount = document.createElement("div");
        cartProductCount.classList.add("cart__product-count");
        const cartProductElementCount = this.closest(".product").querySelector(".product__quantity-value").textContent;
        cartProductCount.textContent = cartProductElementCount;

        let cartProductsElement = document.querySelector(".cart__products")
        
        if(cartProductsElement.contains(cartProductsElement.querySelector(`.cart__product[data-id="${cartProductElementDataId}"]`))) {
            let cartProductCountBasket = cartProductsElement.querySelector(`.cart__product[data-id="${cartProductElementDataId}"]`).querySelector(".cart__product-count");
            cartProductCountBasket.textContent = Number(cartProductCountBasket.textContent) + Number(cartProductElementCount);
        } else {
            cartProductsElement.appendChild(cartProductElement);
            cartProductElement.appendChild(cartProductImage);
            cartProductElement.appendChild(cartProductCount);
        };
    });
});