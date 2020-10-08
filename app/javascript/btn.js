$(function(){
  $('.reset-btn').on('click',function(){
    window.location.reload();
    return false;
  }); 

  $('.create-btn').on('click',function(){
    const target = $('.table-wrapper')
    target.fadeIn();
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 500, "swing");
    return false;
  }); 

  $('#page_top').hide();
  $(window).on("scroll", function () {
     if ($(this).scrollTop() > 100) {
      $('#page_top').fadeIn();
     } else {
      $('#page_top').fadeOut();
     }
  });
  $('#page_top').on("click",function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});