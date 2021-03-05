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

hamburgerButton.addEventListener("click", (e) => {
  showMobileMenu();
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

// SLIDER
const mainPageSelector = document.querySelector(".hero-carousel");

// let homePageSliderInterval = setInterval(() => {
//   homePageSlider.next();
// }, 2500);

const homePageSlider = new Siema({
  selector: mainPageSelector,
  loop: true,
  duration: 750,
  easing: "ease-out",
  // onChange() {
  //   clearInterval(homePageSliderInterval);
  //   homePageSliderInterval = setInterval(() => homePageSlider.next(), 2500);
  // },
});

const prev = document.querySelector(".hero-control-prev");
const next = document.querySelector(".hero-control-next");
prev.addEventListener("click", () => homePageSlider.prev());
next.addEventListener("click", () => homePageSlider.next());
