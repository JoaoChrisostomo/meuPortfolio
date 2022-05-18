/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
    navToggle = document.getElementById("nav-toggle")
    navClose = document.getElementById("nav-close")


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () =>{ // Add event listener to close button
        navMenu.classList.remove("show-menu") // Remove class show-menu
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink =document.querySelectorAll(".nav_link")

function removeMenu(){
    const navMenu = document.getElementById("nav-menu")
    // Validate if constant exists
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n =>{
    n.addEventListener("click", removeMenu)
})