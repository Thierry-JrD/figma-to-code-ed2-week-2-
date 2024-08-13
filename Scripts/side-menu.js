/* Side Menu Render */

const side_menu = document.getElementById('side-menu');
const menu_btn = document.getElementById('menu');
const cross_btn = document.getElementById('cross');

menu_btn.addEventListener('click', () => {
    side_menu.style.display = 'flex';
    menu_btn.style.display = 'none';
    cross_btn.style.display = 'flex';
});

cross_btn.addEventListener('click', () => {
    side_menu.style.display = 'none';
    menu_btn.style.display = 'flex';
    cross_btn.style.display = 'none';
});

window.addEventListener('resize', () => {
    //console.log(innerWidth + "px");

    if(innerWidth <= 768) {
        menu_btn.style.display = 'flex';
    } else {
        side_menu.style.display = 'none';
        menu_btn.style.display = 'none';
        cross_btn.style.display = 'none';
    }
});