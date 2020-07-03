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
    responsive: [{
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 1,
        // centerMode: true,
        infinite: true,
      }
    }, ],
  });


  // всплывающая инфа

  $('[data-modal=consultation-left]').on('click', function () {
    $('#speaker-left').fadeIn('slow');
  })

  $('.popup__close, [data-modal=consultation-right]').on('click', function () {
    $('#speaker-left').fadeOut('fast');
  })
  // $('[data-modal=consultation-right]').on('click', function () {
  //   $('#speaker-right').fadeIn('slow');
  // })

  $('.popup__close, [data-modal=consultation-left]').on('click', function () {
    $('#speaker-right').fadeOut('fast');
  })

  //   модальные окна 

  $('[data-modal=callback]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  })

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #consultation_mini').fadeOut('fast');
  })


  $('[data-modal=callback_mini]').on('click', function () {
      $('#consultation').fadeOut('fast');
    })

  $('[data-modal=callback_mini]').on('click', function () {
      $('.overlay, #consultation_mini').fadeIn('slow');
    })

    $('.modal__close, .button_mini').on('click', function () {
      $('.overlay, #consultation_mini').fadeOut('fast');
    })


  // липкое меню 

  // $(window).scroll(function() {
  //   if ($(this).scrollTop() >= 280) {
  //     $(".header").addClass("fix");
  //   } else {
  //     $(".header").removeClass("fix");
  //   }
  // });
  window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

  // валидация 

  function valideForm(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        },
        privat_data: "required",
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой телефон",
        privat_data: "Требуется согласие",
      }
    });
  };
  valideForm('.modal__form');
  valideForm('.custom-checkbox');




  $('input[name=phone]').mask("+7 (999) 999-99-99");

  // скролл

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });
});

// мобильное меню

let menuButton = document.querySelector('.menu-button'),
  menu = document.querySelector('.menu-mobile');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('menu-mobile-active');
});