/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    // Add event listener to close button
    navMenu.classList.remove("show-menu"); // Remove class show-menu
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

function removeMenu() {
  const navMenu = document.getElementById("nav-menu");
  // Validate if constant exists
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => {
  n.addEventListener("click", removeMenu);
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]");
tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    console.log(tab.dataset.target);

    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
  });
});


/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services_modal");
      modalBtns = document.querySelectorAll(".services_button");
      modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener("click", () =>{
        modal(i);
    });
});

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener("click", () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove("active-modal");
        });
    });
});



/*==================== MIXTUP FILTER PORTFOLIO  ====================*/
let mixerPortfolio = mixitup(".work_container", { // Select the container class
    selectors: { // Selectors for the filter controls
        target: '.work_card'  // The target element to be filtered
    },
    Animation: {  // Set the animation parameters
        duration: 300  // The duration of the transition
    }
});
