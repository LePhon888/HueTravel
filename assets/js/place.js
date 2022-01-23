
//ShowSlide
$(document).ready(function(){
    var slideIndex = 1;
    var numOfSlide = $(".mySlides").length;

    //slide vua load trang
    $(".mySlides:nth-child(" + slideIndex + ")").css("display", "block");
    
    
    $(".next").click(function(){
        slideIndex += 1;
        if(slideIndex > numOfSlide) 
            slideIndex = 1;
        var currentSlide = $(".mySlides:nth-child(" + slideIndex + ")");
        $(".mySlides:not(currentSlide)").css("display", "none");
        currentSlide.css("display", "block");        
    });
    $(".prev").click(function(){
        slideIndex -= 1;
        if(slideIndex < 1) 
            slideIndex = numOfSlide;
        var currentSlide = $(".mySlides:nth-child(" + slideIndex + ")");
        $(".mySlides:not(currentSlide)").css("display", "none");
        currentSlide.css("display", "block");   
    });

    //animation
    $('.container-right div').addClass("animation-right");
})