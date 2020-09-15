$(function(){
  $('.spending-form').each(function(){
    $(this).on('input',function(){

      const nenkin = parseInt( $( '#nenkin-form' ).val() );
      const kokuho = parseInt( $( '#kokuho-form' ).val() );
      const juumin = parseInt( $( '#juumin-form' ).val() );
      const seikatu = parseInt( $( '#seikatu-form' ).val() );
      const other_spending = parseInt( $( '#other-spending-form' ).val() );

      const spending_sum = nenkin + kokuho + juumin + seikatu + other_spending
      // const spending_sum_fixed = spending_sum.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,');
      $('#spending-sum').html(spending_sum.toLocaleString());
    });
  });
});

$(function(){
  $('.income-form').each(function(){
    $(this).on('input',function(){

      const taisyoku = parseInt( $( '#taisyoku-form' ).val() );
      const situgyou = parseInt( $( '#situgyou-form' ).val() );
      const other_income = parseInt( $( '#other-income-form' ).val() );

      const income_sum = taisyoku + situgyou + other_income
      $('#income-sum').html(income_sum.toLocaleString());
    });
  });
});