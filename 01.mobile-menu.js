const menuOpenBtn = document.querySelector('#menu-open-btn');
const menuCloseBtn = document.querySelector('#menu-close-btn');

menuOpenBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('mobile-menu');
})

menuCloseBtn.addEventListener('click', ()=>{
    menuOpenBtn.click();
})