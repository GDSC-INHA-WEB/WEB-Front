window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

const swiper_background = new Swiper("#background", {
  direction: "vertical",

  // centerSlide
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,

  //loop
  loop: false,

  //nextSlide
  mousewheel: true,

  //slideSpeed
  speed: 1000,

  slidesOffsetBefore: 0,
  slidesOffsetAfeter: 0,

  observer: true,
  observeParents: true,

  on: {
    reachEnd: function () {
      const image = document.getElementById("arrow");
      image.style.transition = "visibility 0.1s";
      image.style.visibility = "hidden";
    },
    slideChange: function () {
      const swiper = this;
      const image = document.getElementById("arrow");
      if (swiper.isEnd) {
        image.style.transition = "visibility 0.1s";
        image.style.visibility = "hidden";
      } else {
        image.style.transition = "visibility 0.1s";
        image.style.visibility = "visible";
      }
    },
  },
});

const swiper = new Swiper("#page2_swiper", {  
  // centerSlide
  slidesPerView: "1.1",
  centeredSlides: false,
  spaceBetween: 10,

  //loop
  loop: false,

  //nextSlide
  mousewheel: true,

  //slideSpeed
  speed: 1500,

  breakpoints: {
    375: {
      slidesPerView: "1.25"
    }
  }
});
