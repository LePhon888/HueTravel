$(window).ready(function() {
    $('.welcome .content').addClass("animation-right");
    $(window).scroll(function(){
        //animation
        if($(this).scrollTop() > ($(".welcome").innerHeight()) / 3){
            $('.explore-content').addClass("animation-right");
            $('.explore-list-img').addClass("animation-left");
        }
        
        if($(this).scrollTop() > 
        ($(".welcome").innerHeight() + $(".explore").innerHeight() + $(".explore").innerHeight()) / 2.5){
            $('.place-content').addClass("animation-top");
        }
    });

    //sign up
    $(".nav-icon i").click(function(){
        $(".modal").css("display", "block");
    });
    $(".close").click(function(){
        $(".modal").css("display", "none");
    })
})