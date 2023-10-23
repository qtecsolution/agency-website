const chooseSlider = new Swiper('.chooseSlider', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 750,
  spaceBetween: 20,
  pagination: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
    1800: {
      slidesPerView: 5,
    },
  },
})
