const hamburger = document.querySelector("#hamburger")
const hamburgerMenu = document.querySelector(".nav__list--mobile")

console.log(hamburgerMenu);

hamburger.addEventListener("click", () => {
    console.log("clicked")

    if (hamburgerMenu.style.visibility == "visible") {
        hamburgerMenu.style.opacity = "0"
        hamburgerMenu.style.visibility = "hidden"
    } else {
        hamburgerMenu.style.visibility = "visible"
        hamburgerMenu.style.opacity = "1"

    }

})