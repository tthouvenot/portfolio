document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".header-container__burger");
    const menu = document.querySelector(".header-container__menu");

    burger.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});