document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName("header__burger")[0]
        .addEventListener("click", function () {
            document.getElementsByClassName("header__burger")[0].classList.toggle("active");
            document.getElementsByClassName("header__menu")[0].classList.toggle("active");
            document.getElementsByTagName("body")[0].classList.toggle("lock");
        })
});