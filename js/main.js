const menu = document.getElementById(`menu`);
const nav = document.getElementById(`nav`);

menu.addEventListener(`click`, function (e) {
    if (nav.classList.contains(`hide-mobile`) === true) {
        menu.setAttribute(`src`,`img/exit.svg`);
        menu.style.position = `fixed`;
        menu.style.position = 7;
        nav.classList.toggle(`hide-mobile`);
    } else {
        menu.setAttribute(`src`, `img/hamburger.svg`);
        menu.style.position = `absolute`;
        nav.classList.toggle(`hide-mobile`);
    }
});
