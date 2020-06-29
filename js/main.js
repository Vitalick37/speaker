$(document).ready(function () {
    $('.slider_first').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider'
    });
    $('.slider').slick({
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        asNavFor: '.slider_first',
        prevArrow: '<button type="button" class="slick-prev"><div class="arrow arrow_prev"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="arrow arrow_next"></div></button>',
        focusOnSelect: true,
        // centerMode: true,
        // centerPadding: '70px',
    });

    $('[data-modal=consultation-left]').on('click', function () {
        $('#speaker-left').fadeIn('slow');
      })
    
      $('.popup__close, [data-modal=consultation-right]').on('click', function () {
        $('#speaker-left').fadeOut('fast');
      })
    $('[data-modal=consultation-right]').on('click', function () {
        $('#speaker-right').fadeIn('slow');
      })
    
      $('.popup__close, [data-modal=consultation-left]').on('click', function () {
        $('#speaker-right').fadeOut('fast');
      })

    //   модальные окна 

    $('[data-modal=callback]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
      })
    
      $('.modal__close').on('click', function () {
        $('.overlay, #consultation').fadeOut('fast');
      })

      
    $('[data-modal=callback_mini]').on('click', function () {
        $('.overlay, #consultation_mini').fadeIn('slow');
      })
    
      $('.modal__close').on('click', function () {
        $('.overlay, #consultation_mini').fadeOut('fast');
      })
});