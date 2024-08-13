/* Card-grid Manager */

const card_grid = document.getElementById('card-grid');

const cards = [
    {
        'image_url': '../Assets/M+NSW+SW+AIR+CREW+FLC+BB.png',
        'title': 'SUMMER SHIRST',
        'price': 99,
        'pop_up': 'block'
    },
    {
        'image_url': '../Assets/M+NSW+SW+AIR+CREW+FLC+BB.png',
        'title': 'SUMMER SHIRST',
        'price': 99,
        'pop_up': 'block'
    },
    {
        'image_url': '../Assets/M+NSW+SW+AIR+CREW+FLC+BB.png',
        'title': 'SUMMER SHIRST',
        'price': 99,
        'pop_up': 'none'
    },
    {
        'image_url': '../Assets/M+NSW+SW+AIR+CREW+FLC+BB.png',
        'title': 'SUMMER SHIRST',
        'price': 99,
        'pop_up': 'none'
    },
    {
        'image_url': '../Assets/M+NSW+SW+AIR+CREW+FLC+BB.png',
        'title': 'SUMMER SHIRST',
        'price': 99,
        'pop_up': 'block'
    },
    {
        'image_url': '../Assets/M+NSW+SW+AIR+CREW+FLC+BB.png',
        'title': 'SUMMER SHIRST',
        'price': 99,
        'pop_up': 'none'
    }
];

const card_Render = () => {
    let card_slider = '';

    cards.forEach((card) => {
        card_slider += `
            <div class="card-container">
                <div class="card">
                    <span style="display: ${card.pop_up}; z-index: 10">GET OFF 20%</span>
                    <img src="${card.image_url}" alt="${card.image_url}.tr" />
                    <div class="card-buttons">
                        <button class="add-to-cart">
                            <span .class="cart-logo">
                                <img src="../Assets/cart.png" alt="cart">
                            </span>
                            <span>ADD TO CART</span>
                        </button>
                        <button class="buy-now">BUY NOW</button>
                    </div>
                </div>
    
                <div class="card-content" style="margin-top: 15px; line-height: 36px; font-size: 30px">
                    <h3 style="color: var(--b-black)">${card.title}</h3>
                    <span style="font-weight: bold; color: var(--b-dark-gray)">$${card.price}</span>
                </div>
            </div>
        `;
    });

    return card_slider;
};

//console.log(card_Render());

card_grid.innerHTML = card_Render();