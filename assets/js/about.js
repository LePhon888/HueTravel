//********************************************************************************* */
//Doan Trung Nguyen//
$(document).ready(function(){
    $(".info").mouseover(function(){
      $(".info-logo").show();
    });
    $(".info").mouseout(function(){
      $(".info-logo").hide();
    });
  });
$(document).ready(function(){
    $("#member").mouseover(function(){
      $(".member-title").fadeIn(1500);
    });
    $("#member").mouseout(function(){
      $(".member-title").fadeOut(1500);
    });
  });
$(document).ready(function(){
    $(".member-1").mouseover(function(){
      $(this).animate( {
        width:"+=100px",
        height:"+=100px",
      })
    })
    .mouseout(function() {
      $(this).animate ( {
        width:"100px",
        height: "100px",
      })
    })
})
$(document).ready(function(){
  $(".member-2").mouseover(function(){
    $(this).animate( {
      width:"+=100px",
      height:"+=100px"
    })
  })
  .mouseout(function() {
    $(this).animate ( {
      width:"100px",
      height: "100px"
    })
  })
})
let modalBtn = document.getElementById("contact-button");
let modal = document.querySelector(".popup");
let cancel = document.querySelector("#close");
modalBtn.onclick = function(){
modal.style.display = "block"
}
cancel.onclick = function(){
modal.style.display = "none"
}

//------------clock-------------//
function Dong_ho() {
  var gio = document.getElementById("gio");
  var phut = document.getElementById("phut");
  var giay = document.getElementById("giay");
  var Gio_hien_tai = new Date().getHours();
  var Phut_hien_tai = new Date().getMinutes();
  var Giay_hien_tai = new Date().getSeconds();
  gio.innerHTML = Gio_hien_tai;
  phut.innerHTML = Phut_hien_tai;
  giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);
//*************************************************************************************** */