const swiper = new Swiper('.accessories__slider', {
   slidesPerView: 3,
   spaceBetween: 40,
   loop: true,
   navigation: {
     nextEl: '.arrow-slider-next',
     prevEl: '.arrow-slider-prev',
   },
 });



 const swiperReviewss = new Swiper('.reviews-slider', {
  slidesPerView: 10,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: '.reviews-slider-next',
    prevEl: '.reviews-slider-prev',
  },
  pagination: {
    el: '.reviews-slider-pagination',
    type: 'fraction',
   },
});