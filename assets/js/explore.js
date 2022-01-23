$(document).ready(function() {
    //Read more
    $('#myBtn').click(function() {
        $('#dots, #more').toggle( function() {
            if($('#dots').is(":visible")) {
                $('#myBtn').text("Đọc thêm");
            }
            else{
                $('#myBtn').text("Thu gọn");
            }
        });        
    });
    
    $(".myImg").click(function(){
        var srcImg = $(this).attr("src");
        var altImg = $(this).attr("alt");
        $("#modal-content").attr("src", srcImg);
        $("#caption").text(altImg);
        $(".modal").css("display", "block");
    })
    $(".close").click(function(){
        $(".modal").css("display", "none");
    })
    $(".modal:not(modal-content)").click(function(){
        $(".modal").css("display", "none");
    })

    //animation
    $('.welcome').addClass("animation-right");
    $(window).scroll(function(){
        //animation
        if($(this).scrollTop() > ($(".welcome").innerHeight()) / 3){
            $('.explore-03 .container').addClass("animation-top");
        }
        
        if($(this).scrollTop() > 
        ($(".welcome").innerHeight() + $(".explore-03").innerHeight() + $(".explore-02").innerHeight()) / 2.5){
            $('.explore-02 .list-image').addClass("animation-right");
            $('.explore-02 .content').addClass("animation-left");
        }
    });
    
})
//********************************************************************************************************************** */
//Doan Trung Nguyen
for (var i = 1; i<= 5; i++){
    var str1= "\".button-" +   String(i) + "\"";
    var str2= "\".show-" + String(i) + "\"";
    $(document.getElementsByClassName(str1)[0]).click(function(){
        $(str1).click(function(){
        $(str2).toggle();
        });
    });
}

$(document).ready(function(){
    $(".button-1").click(function(){
    $(".show-1").toggle();
    $(".show-2").hide();
    $(".show-3").hide();
    $(".show-4").hide();
    $(".show-5").hide();
    $(".hint").hide();
    });
});
$(document).ready(function(){
    $(".button-2").click(function(){
        $(".show-1").hide();
        $(".show-2").toggle();
        $(".show-3").hide();
        $(".show-4").hide();
        $(".show-5").hide();
        $(".hint").hide();
    });
});
$(document).ready(function(){
    $(".button-3").click(function(){
        $(".show-1").hide();
        $(".show-2").hide();
        $(".show-3").toggle();
        $(".show-4").hide();
        $(".show-5").hide();
        $(".hint").hide();
    });
});
$(document).ready(function(){
    $(".button-4").click(function(){
        $(".show-1").hide();
        $(".show-2").hide();
        $(".show-3").hide();
        $(".show-4").toggle();
        $(".show-5").hide();
        $(".hint").hide();
    });
});
$(document).ready(function(){
    $(".button-5").click(function(){
    $(".show-1").hide();
    $(".show-2").hide();
    $(".show-3").hide();
    $(".show-4").hide();
    $(".show-5").toggle();
    $(".hint").hide();
    });
});
//********************************************************************************************************************* */