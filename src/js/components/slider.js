import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.trainers__content', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  navigation: {
    nextEl: '.trainers__slider-btn--next',
    prevEl: '.trainers__slider-btn--prev',
  }, 
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});