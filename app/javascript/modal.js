$(function(){
  $('.js-modal-open').each(function(){
      $(this).on('click',function(){
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
      });
  });
  $('.create-btn').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  }); 
});