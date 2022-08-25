const cartWrapper = document.querySelector('.shop__korzina-wrapper');
const korzina = document.querySelector('.shop__korzina');

window.addEventListener('click', function (event) {
    if(event.target.hasAttribute('data-cart')) {
        korzina.style.display = 'flex';
        const card = event.target.closest('.card');
        
        const productInfo = {
            id: card.dataset.id,
            title: card.querySelector('.shop__item-title').textContent,
            count: card.querySelector('.shop__item-countText').textContent,
            price: card.querySelector('.shop__item-price__text').textContent

        }

        const cartItemHtml = 
        `
        <div class="shop__korzina-item" data-id="${productInfo.id}">
            <h5 class="shop__korzina-item__title">${productInfo.title}</h5>
            <div class="shop__korzina-item__diteils">
                <div class="shop__korzina-item__counters counter-wrapper">
                    <div class="shop__korzina-item__mat shop__korzina-item__minus" data-action="minus">-</div>
                    <div class="shop__korzina-item__countText" data-count>${productInfo.count}</div>
                    <div class="shop__korzina-item__mat shop__korzina-item__minus" data-action="plus">+</div>
                </div>
                <div class="shop__korzina-item__price">
                    <span class="shop__korzina-item__price-text" data-price>${productInfo.price}</span>
                </div>
            </div>
        </div>
        `;
        
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
    }
});
