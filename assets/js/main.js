const navButton = document.getElementById("nav-button")

function navMenu() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}

navButton.onclick = navMenu;
