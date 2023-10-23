const tl = gsap.timeline()

tl.to('body', {
  overflow: 'hidden',
})
  .to('.preloader .text-container', {
    duration: 0,
    opacity: 1,
    ease: 'Power3.easeOut',
  })
  .from('.preloader .text-container .brand', {
    duration: 1.5,
    delay: 1,
    y: 70,
    ease: 'Power3.easeOut',
  })
  .to('.preloader .text-container .brand', {
    duration: 1.2,
    y: 70,
    ease: 'Power3.easeOut',
  })
  .to('.preloader', {
    duration: 1.5,
    height: '0vh',
    ease: 'Power3.easeOut',
  })
  .to(
    'body',
    {
      overflow: 'auto',
    },
    '-=2'
  )
  .to('.preloader', {
    display: 'none',
  })
