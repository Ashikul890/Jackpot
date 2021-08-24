// banner-bottom-slider

$('.banner-bottom-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
 responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows:false,
      autoplay:true,
    }
  },
  {
    breakpoint: 769,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      dots:false,
      autoplay:true,
    
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows:false,
      fade:false,
      autoplay:true,
    
    }
  },
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows:false,
      autoplay:true,
      
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

//  card

$('.accordion-item').on('click', function(){
  $('.add_border').removeClass('add_border');
  $(this).toggleClass('add_border');          
});


// Coundown js
  $('.coun_down1').countdown('2030/01/01', function (event) {
      $(this).html(event.strftime('%H'));
  });
  $('.coun_down2').countdown('2030/01/01', function (event) {
      $(this).html(event.strftime('%M'));
  });
  $('.coun_down3').countdown('2030/01/01', function (event) {
      $(this).html(event.strftime('%S'));
  });





  //Tounament scroll js

  $(".tun_scroll").niceScroll({
      cursorcolor: "#1f004f",
      cursorwidth: "10px",
      cursorborder: "transparent",
      autohidemode: false,
      background: "#000",
      iframeautoresize: true,
      smoothscroll: true,
  });

