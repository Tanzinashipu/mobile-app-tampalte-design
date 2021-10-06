
$(document).ready(function () {
  // ========
  // navbar shrink
  // =========
  //    stickytop menu
      $(window).scroll(function(){
         var scrolling=$(this).scrollTop();
          var sticky=$('.sticky_top');
          if(scrolling>50){
              sticky .addClass('menu_bg');
          }
          else{
                sticky .removeClass('menu_bg');
          }
      });

      // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 150});

   var html_body = $('html, body');
   $('nav a').on('click', function () {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           if (target.length) {
               html_body.animate({
                   scrollTop: target.offset().top - 50
               }, 2000);
               return false;
           }
       }
   });
// venobox jss
$('.venobox').venobox({

    });

    //    slick slider for feature
    $('.feature-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll:2,
      dots:true,
      autoplay:true,
      arrows:false,

      responsive: [
    {
      breakpoint:992,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1,

      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });

  // -------screenshots slider js---------
  $('.img_slider').slick({
    infinite: true,
    slidesToShow:4,
    slidesToScroll:2,
    dots:true,
    autoplay:true,
    arrows:false,

    responsive: [
  {
    breakpoint:992,
    settings: {
      slidesToShow: 3,
      slidesToScroll:1,

    }
  },
  {
    breakpoint:768,
    settings: {
      slidesToShow: 2,
      slidesToScroll:1
    }
  },
  {
    breakpoint:576,
    settings: {
      slidesToShow:2,
      slidesToScroll:2
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]

});
//    preloader js
$(window).on('load',function(){
 $('.peloader').delay(2000).fadeOut(3000);
});

// testimonial slider js=========
$('.testimonial_slider').slick({
  infinite: true,
  slidesToShow:3,
  slidesToScroll:2,
  dots:true,
  autoplay:true,
  arrows:false,

  responsive: [
{
  breakpoint:992,
  settings: {
    slidesToShow: 2,
    slidesToScroll:1,

  }
},
{
  breakpoint:768,
  settings: {
    slidesToShow: 1,
    slidesToScroll:1
  }
},
{
  breakpoint:576,
  settings: {
    slidesToShow:1,
    slidesToScroll:2
  }
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]

});

// team member slider js=====
$('.team_slider').slick({
  infinite: true,
  slidesToShow:3,
  slidesToScroll:2,
  dots:true,
  autoplay:true,
  arrows:false,

  responsive: [
{
  breakpoint:992,
  settings: {
    slidesToShow: 2,
    slidesToScroll:1,

  }
},
{
  breakpoint:768,
  settings: {
    slidesToShow: 1,
    slidesToScroll:1
  }
},
{
  breakpoint:576,
  settings: {
    slidesToShow:1,
    slidesToScroll:2
  }
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]

});

   // back back-to-top
$(window).scroll(function() {
   if ($(this).scrollTop() > 100) {
     $('.back-to-top').fadeIn();
   } else {
     $('.back-to-top').fadeOut();
   }
 });

 $('.back-to-top').click(function() {
   $('html, body').animate({
     scrollTop: 0
   },2000);
   return false;
 });

 // navbar colspan js
 $(".nav-link").on("click", function(){
   $(".navbar-collapse").collapse("hide");
 });
 
 // toggle theme light and dak mood=======
 // =======
 function toggleTheme(){
   if(localStorage.getItem("shala-theme") !== null){
    if(localStorage.getItem("shala-theme") === "dark"){
      $("body").addClass("dark");
    }
    else{
      $("body").removeClass("dark");
    }
   }
   updateIcon();
 }
 toggleTheme();
 $(".toggle-theme").on("click",function(){
   $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
      localStorage.setItem("shala-theme","dark");
    }
    else{
     localStorage.setItem("shala-theme","light");
    }
    updateIcon();
 });
 function updateIcon(){
   if($("body").hasClass("dark")){
     $(".toggle-theme i").removeClass("fa-moon");
     $(".toggle-theme i").addClass("fa-sun");
   }
   else{
     $(".toggle-theme i").removeClass("fa-sun");
     $(".toggle-theme i").addClass("fa-moon");
   }
 }

  });
