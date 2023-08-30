const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('navigation__list')
menuIcon.addEventListener('click', (e)=>{
    menuIcon.classList.toggle('active');
    menuList.classList.toggle('none');
})