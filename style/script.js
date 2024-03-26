window.addEventListener("scroll", function(){
    var header =document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
    menu.classList.toggle("sticky", window.scrollY > 0);
});


const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('slide');
    navbar.classList.toggle('slide');
});
