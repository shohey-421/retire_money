$(function(){
  $('.spending-form').each(function(){
    $(this).on('input',function(){

      const nenkin = parseInt( $( '#nenkin-form' ).val() );
      const kokuho = parseInt( $( '#kokuho-form' ).val() );
      const juumin = parseInt( $( '#juumin-form' ).val() );
      const seikatu = parseInt( $( '#seikatu-form' ).val() );
      const other_spending = parseInt( $( '#other-spending-form' ).val() );

      const spending_sum = nenkin + kokuho + juumin + seikatu + other_spending
      $('#spending-sum').html(spending_sum.toLocaleString());

      $('.spending-sell').each(function(){
        $(this).html(spending_sum.toLocaleString());
      });

    });
  });

  $('.income-form').each(function(){
    $(this).on('input',function(){

      const taisyoku = parseInt( $( '#taisyoku-form' ).val() );
      const situgyou = parseInt( $( '#situgyou-form' ).val() );
      const other_income = parseInt( $( '#other-income-form' ).val() );

      const income_sum = taisyoku + situgyou + other_income
      $('#income-sum').html(income_sum.toLocaleString());

      const income_1 = taisyoku + other_income
      $('#income-sell-1').html(income_1.toLocaleString());

      



    });
  });
  
  
  $('.stock-form').on('input',function(){
    const stock = parseInt( $( '#stock-form' ).val() );
    $('#stock-sum').html(stock.toLocaleString());
    $('#stock0').html(stock.toLocaleString());
  });
});