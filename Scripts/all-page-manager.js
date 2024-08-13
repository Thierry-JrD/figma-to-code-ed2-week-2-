/* All page Manager */

const banner_workshop_collection = document.getElementById('banner-workshop-collection');
const inside_will_buy_cart = document.getElementById('inside-will-buy-cart');
const cart_tab_manager = document.getElementById('cart-tab');
const checkout_page_manager = document.getElementById('checkout-page');
const sucess_page_manager = document.getElementById('sucess-page');

const cart_links = document.querySelectorAll('.cart-link');
const checkout_now_btn = document.getElementById('checkout-now-btn');
const pay_btn = document.querySelector('.pay-btn');
const logo_ballamas = document.querySelectorAll('.logo');
const card = document.querySelectorAll('card');

logo_ballamas.forEach((elem) => {
    elem.addEventListener('click', () => {
        banner_workshop_collection.style.display = 'flex';

        cart_tab_manager.style.display = 'none';
        checkout_page_manager.style.display = 'none';
        sucess_page_manager.style.display = 'none';
    });
});

cart_links.forEach((elem) => {
    elem.addEventListener('click', () => {
        cart_tab_manager.style.display = 'flex';

        banner_workshop_collection.style.display = 'none';
        checkout_page_manager.style.display = 'none';
        sucess_page_manager.style.display = 'none';
    });
});

card.forEach((elem) => {
    elem.addEventListener('click', () => {
        inside_will_buy_cart.style.display = 'flex';

        banner_workshop_collection.style.display = 'none';
        checkout_page_manager.style.display = 'none';
        sucess_page_manager.style.display = 'none';
    });
});

checkout_now_btn.addEventListener('click', () => {
    checkout_page_manager.style.display = 'flex';

    cart_tab_manager.style.display = 'none';
    sucess_page_manager.style.display = 'none';
});

pay_btn.addEventListener('click', () => {
    sucess_page_manager.style.display = 'flex';

    checkout_page_manager.style.display = 'none';
});
