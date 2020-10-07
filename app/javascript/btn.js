$(function(){
  $('.reset-btn').on('click',function(){
    window.location.reload();
    return false;
  }); 

  $('.create-btn').on('click',function(){
    $('.table-wrapper').fadeIn();
    $('body,html').animate({scrollTop: 5000}, 500);
    return false;
  }); 

  $('#page_top').hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
      $('#page_top').fadeIn();
     } else {
      $('#page_top').fadeOut();
     }
  });
  $('#page_top').click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});