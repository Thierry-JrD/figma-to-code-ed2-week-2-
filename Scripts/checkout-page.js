/* Checkout Page */

const checkout_page_tab = document.querySelector('.checkout-page-tab');

const cart_tab_elem_for_checkout = [
    {
        'name': 'T-Shirt',
        'color': 'Green',
        'size': 'Large',
        'image': 'M+NK+SOLO+SWSH+SS+HW+TOP 1',
        'total': 174.00
    },
    {
        'name': 'Men\'s Dri-FIT Golf Jacket',
        'color': 'Ocean',
        'size': 'Large',
        'image': 'M+NK+DF+NGC+JACKET 1',
        'total': 100.00
    },
    {
        'name': 'Tatum 2 "Red Cement"',
        'color': null,
        'size': 15,
        'image': 'JORDAN+TATUM+2 1',
        'total': 250.00
    }
];

let checkout_inner = '';

let checkout_page_render = () => {
    
    cart_tab_elem_for_checkout.forEach((elem) => {

        checkout_inner += `
        <tr>
            <td>
                <div class="checkout-cart-info">
                    <div class="checkout-cart-img"><img src="../Assets/${elem.image}.png" alt="${elem.image}" /></div>
                    <div class="checkout-cart-content">
                        <p>${elem.name}</p>
                        <p>
                            ${elem.color == null ? '' : `Color:${elem.color}-`}Size:${elem.size}
                        </p>
                    </div>
                </div>
            </td>

            <td>
                <p class="checkout-cart-price">$${elem.total}.00</p>
            </td>
        </tr>
        `;
    });

    return checkout_inner;
};

checkout_page_tab.innerHTML = `
        <table>
            <tbody>${checkout_page_render()}</tbody>
        </table>
`;
