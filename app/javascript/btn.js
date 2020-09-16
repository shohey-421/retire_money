$(function(){
  $('.reset-btn').on('click',function(){
    window.location.reload();
  }); 

  $('.create-btn').on('click',function(){
    $('.table-wrapper').fadeIn();
    $('body,html').animate({scrollTop: 1200}, 500);
    return false;

  }); 
});

