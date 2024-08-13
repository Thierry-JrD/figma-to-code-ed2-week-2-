/* Script for Cart fetching tab */

const cart_tab = document.getElementById('cart-tab');


const cart_nbr = 3;
const cart_tab_elem = [
    {
        'name': 'T-Shirt',
        'type': 'Green-Large',
        'image': 'M+NK+SOLO+SWSH+SS+HW+TOP 1',
        'price': 87,
        'qty': 2,
        'total': 174.00
    },
    {
        'name': 'Men\'s Dri-FIT Golf Jacket',
        'type': 'Ocean-Large',
        'image': 'M+NK+DF+NGC+JACKET 1',
        'price': 100,
        'qty': 1,
        'total': 100.00
    },
    {
        'name': 'Tatum 2 "Red Cement"',
        'type': 'Size: 16',
        'image': 'JORDAN+TATUM+2 1',
        'price': 125,
        'qty': 2,
        'total': 250.00
    }
];

const cart_tab_banner = `
    <span>Cart(${cart_nbr})</span>
    <button>
        <img src="../Assets/trash.png" alt="trash" />
        <span>Clear Cart</span>
    </button>
`;

let var_cart_tab = '';

let cart_tab_render = () => {

    cart_tab_elem.forEach((elem) => {
        var_cart_tab += `
        <tr>
            <td>
                <div class="fetching-cart-info">
                    <div class="fetching-cart-img"><img src="../Assets/${elem.image}.png" alt="${elem.image}" /></div>
                    <div class="fetching-cart-content">
                        <p>${elem.name}</p>
                        <p>${elem.type}</p>
                        <p>$${elem.price}</p>
                    </div>
                </div>
            </td>

            <td>
                <div class="fetching-cart-qty">
                    <span class="fetching-cart-qty-btn">
                        <button>-</button>
                        <span>${elem.qty}</span>
                        <button>+</button>
                    </span>
                    <button class="fetching-cart-qty-img">
                        <img src="../Assets/trash.png" alt="trash" />
                    </button>
                </div>
            </td>

            <td>
                <p class="fetching-cart-price">$${elem.price * elem.qty}.00</p>
            </td>
        </tr>
        `;
    });

    return var_cart_tab;
};

let order_summary = `
    <div id="order-summary">
        <h2>Order summary</h2>
    </div>

    <div id="summary-content">
        <div class="subtotal-discount">
            <div>
                <span>Subtotal</span>
                <span>$524.00</span>
            </div>
            <div>
                <span>Discount</span>
                <span>$0</span>
            </div>
        </div>

        <div class="order-total">
            <div>
                <span>Order total</span>
                <span>$524.00</span>
            </div>
            <button id="checkout-now-btn">Checkout now</button>
        </div>
    </div>
`;

cart_tab.innerHTML = `
    <div class="cart-inner-tab">
        <div class="cart-tab-banner">${cart_tab_banner}</div>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>${cart_tab_render()}</tbody>
        </table>
    </div>
    <div class="summary">${order_summary}</div>
`;