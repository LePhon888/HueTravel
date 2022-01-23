$(window).ready(function() {
    $(window).scroll(function(){
        //header scroll
        if($(this).scrollTop() > $('.header').innerHeight() * 2) {
            $('.header').addClass("header-scroll");
        }
        else { 
            $('.header').removeClass("header-scroll");
        }

        //button scroll
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        }
        else {
            $('.scrollToTop').fadeOut();
        }
      });

      $('.scrollToTop').click(function() {
          $('html, body').animate({scrollTop: 0}, 700);
      })
});

