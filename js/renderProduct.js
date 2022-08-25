const shopContent = document.querySelector('.shop__content');


async function getProducts() {
    const respons = await fetch("./js/productInfo.json");

    const productArray = await respons.json();

    renderProducts(productArray);
}

getProducts();


function renderProducts(productArray) {
    productArray.forEach(item => {
        const productHTML = 
        `
        <div class="card shop__item" data-id="${item.id}">
            <h4 class="shop__item-title">${item.title}</h4>
            <div class="shop__item-diteils">
                <div class="shop__item-counters counter-wrapper">
                    <div class="shop__item-mat shop__item-minus" data-action="minus">-</div>
                    <div class="shop__item-countText" data-count>1</div>
                    <div class="shop__item-mat shop__item-plus" data-action="plus">+</div>
                </div>
                <div class="shop__item-price">
                    <span class="shop__item-price__text" data-price>${item.price}</span>
                </div>
            </div>
            <button data-cart type="button" class="shop__item-btn">
                + в корзину
            </button>
        </div>
        `;
        console.log(item);
        shopContent.insertAdjacentHTML('beforeend', productHTML)
    });
}
