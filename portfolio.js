const menu = document.getElementById("menu");
const ul = document.querySelector(".display-menu");
menu.addEventListener("click", (e) => {
    if (menu.innerHTML === '<i class="fa-solid fa-bars"></i>') {
        e.preventDefault();
        ul.classList.toggle("show-menu");

        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    if (menu.innerHTML === '<i class="fa-solid fa-xmark"></i>') {
        menu.addEventListener("click", (e) => {
            ul.classList.remove("display-menu")
            menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

        });
    }
});
