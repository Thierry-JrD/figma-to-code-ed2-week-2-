/* Here's code for customize my cursor */

const cursorDot = document.querySelector('.cursor-dot');
//const cursorOutline = document.querySelector('.cursor-outline');

const circles = document.querySelectorAll('.circle');

const duration = [200, 400, 600, 800];

const circleRadius = [30*90/100, 30*70/100, 30*50/100, 30*30/100];


window.addEventListener('mousemove', (e) => {

    const posX = e.clientX;
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    //cursorOutline.style.left = `${posX}px`;
    //cursorOutline.style.top = `${posY}px`;

    /*cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"});*/

    circles.forEach((circle, index) => {
        circle.style.width = `${circleRadius[index]}px`;
        circle.style.height = `${circleRadius[index]}px`;
        
        circle.animate({
            left: `${posX}px`,
            top: `${posY}px`
        },{duration: duration[index], fill: "forwards"});
    });
});