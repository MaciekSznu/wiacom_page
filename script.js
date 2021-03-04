"use-strict";

const clickPreventDefault = (target, callback) => {
  target.addEventListener("click", (e) => {
    e.preventDefault();
    return callback(e);
  });
};

const click = (target, callback) => {
  target.addEventListener("click", (e) => {
    return callback(e);
  });
};

const hamburgerButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".navigation-wrapper");

const showMobileMenu = () => {
  mobileMenu.classList.toggle("navigation-visible");
};

// const hamburgerActive = () => {
//   hamburgerButton.classList.toggle('hamburger-active');
// };

hamburgerButton.addEventListener("click", (e) => {
  showMobileMenu();
  // hamburgerActive();
});

const mobileMenuItemsScroll = document.querySelectorAll(".navigation-item a");
const documentSections = document.querySelectorAll('*[id^="section"]');
const documentSectionsArray = [...documentSections];

const scrollToSection = (i) => {
  documentSectionsArray[i].scrollIntoView({
    bahavior: "smooth",
  });
};

mobileMenuItemsScroll.forEach((item, index) => {
  clickPreventDefault(item, () => {
    scrollToSection(index);
    const width = window.innerWidth;
    if (width < 1024) {
      showMobileMenu();
    }
  });
});

// mobileMenuItems.forEach((item) => {
//   click(item, () => {
//     const width = window.innerWidth;
//     if ( width < 1024 ) {
//       showMobileMenu();
//       hamburgerActive();
//     }
//   })
// });
