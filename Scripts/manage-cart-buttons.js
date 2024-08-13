/* Manage cart buttons */


window.addEventListener('load', () => {
  // This code is executed when the web page is completly charged
  console.log('La page entière est complètement chargée.');

  const card_container = document.querySelectorAll('.card-container');
  
  card_container.forEach((card_ctn) => {
    const card_button = card_ctn.querySelector('.card-buttons');
    
    /* Listen mousemove Event */
    card_ctn.addEventListener('mouseover', () => {
        /*card_button.classList.add('active');*/
        card_button.style.display = 'flex';
    });

    card_ctn.addEventListener('mouseout', () => {
        card_button.style.display = 'none';
    });
  });
  
});



