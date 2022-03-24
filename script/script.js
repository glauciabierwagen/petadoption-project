
const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var like = document.getElementById("heart");

  like.addEventListener("click",function(){
    like.style.color = "#fff";
  });



$(".toggableIcon").each(function(){
  if($(this).attr("data-permission-value")=="true")
  {
       $(this).addClass("greenIcon"); 
  }else{
      $(this).addClass("redIcon"); 
  }
 });