const menuActiv = document.querySelector('.menu');
const burger = document.querySelector('.user_list_menu');


function toggleMenu(){
    menuActiv.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);