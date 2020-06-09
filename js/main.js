$(function() {
  $('.slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true
  });
});
