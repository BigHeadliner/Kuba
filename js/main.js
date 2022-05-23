$(function(){
  $('.photo__slider').slick({ 
      prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>', 
      nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>', 
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows:false, 
            dots: true, 
          }
        },
      ]
  }) 
  $('.menu__btn').on('click', function(){ 
    $('.menu__list').slideToggle(); 
  });
});