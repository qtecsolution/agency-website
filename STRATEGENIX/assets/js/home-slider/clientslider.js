const clientSlider = new Swiper('.clientSlider', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 750,
  parallax: true,
  spaceBetween: 60,
  pagination: false,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  },
})
