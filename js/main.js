const
    btnBurger = document.querySelector(".header__item.burger"),
    menu = document.querySelector("#menu"),
    btnCloseMenu = document.querySelector("#menu .menu__btnClose");

btnBurger.addEventListener("click", function () {
    menu.classList.add("visible");
});

btnCloseMenu.addEventListener("click", function () {
    menu.classList.remove("visible");
});