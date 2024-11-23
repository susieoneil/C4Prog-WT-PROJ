const navButton = document.getElementById("nav-button")
const navMenu = document.getElementById("nav-menu");

function showNavMenu() {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}

navButton.onclick = showNavMenu;

onresize = (event) => {
    navMenu.style.display = "none";
};