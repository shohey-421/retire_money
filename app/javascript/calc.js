$(function(){
  // 毎月の支出の合計計算とtableの編集
  $('.spending-form').each(function(){
    $(this).on('input',function(){
      // 合計値の計算
      const nenkin = parseInt( $( '#nenkin-form' ).val() );
      const kokuho = parseInt( $( '#kokuho-form' ).val() );
      const juumin = parseInt( $( '#juumin-form' ).val() );
      const seikatu = parseInt( $( '#seikatu-form' ).val() );
      const other_spending = parseInt( $( '#other-spending-form' ).val() );

      const spending_sum = nenkin + kokuho + juumin + seikatu + other_spending
      $('#spending-sum').html(spending_sum.toLocaleString());

      // tableへの出力
      $('.spending-sell').each(function(){
        $(this).html(spending_sum.toLocaleString());
      });
    });
  });

  // 退職後の収入の合計計算とtableの編集
  $('.income-form').each(function(){
    $(this).on('input',incomeCalcTable)
  });

  $('.radio').each(function(){
    $(this).on('click',incomeCalcTable)
  });

  function incomeCalcTable(){
    // 合計値の計算
    const taisyoku = parseInt( $( '#taisyoku-form' ).val() );
    const situgyou = parseInt( $( '#situgyou-form' ).val() );
    const other_income = parseInt( $( '#other-income-form' ).val() );

    const income_sum = taisyoku + situgyou + other_income
    $('#income-sum').html(income_sum.toLocaleString());

    // tableへの出力
    const taisyoku_other = taisyoku + other_income
    const situgyou_other = situgyou + other_income

    // 給付制限あり90日
    if($('#limit_true').prop('checked') && $('#benefit_date_date90').prop('checked')){
      $('#income-sell-1').html(taisyoku_other.toLocaleString());
      $('#income-sell-2').html(other_income.toLocaleString());
      $('#income-sell-3').html(other_income.toLocaleString());
      $('#income-sell-4').html(situgyou_other.toLocaleString());
      $('#income-sell-5').html(situgyou_other.toLocaleString());
      $('#income-sell-6').html(situgyou_other.toLocaleString());
      $('#income-sell-7').html(other_income.toLocaleString());
      $('#income-sell-8').html(other_income.toLocaleString());
      $('#income-sell-9').html(other_income.toLocaleString());
      $('#income-sell-10').html(other_income.toLocaleString());
      $('#income-sell-11').html(other_income.toLocaleString());
      $('#income-sell-12').html(other_income.toLocaleString());
    };
    // 給付制限あり120日
    if($('#limit_true').prop('checked') && $('#benefit_date_date120').prop('checked')){
      $('#income-sell-1').html(taisyoku_other.toLocaleString());
      $('#income-sell-2').html(other_income.toLocaleString());
      $('#income-sell-3').html(other_income.toLocaleString());
      $('#income-sell-4').html(situgyou_other.toLocaleString());
      $('#income-sell-5').html(situgyou_other.toLocaleString());
      $('#income-sell-6').html(situgyou_other.toLocaleString());
      $('#income-sell-7').html(situgyou_other.toLocaleString());
      $('#income-sell-8').html(other_income.toLocaleString());
      $('#income-sell-9').html(other_income.toLocaleString());
      $('#income-sell-10').html(other_income.toLocaleString());
      $('#income-sell-11').html(other_income.toLocaleString());
      $('#income-sell-12').html(other_income.toLocaleString());
    };
    // 給付制限あり120日
    if($('#limit_true').prop('checked') && $('#benefit_date_date150').prop('checked')){
      $('#income-sell-1').html(taisyoku_other.toLocaleString());
      $('#income-sell-2').html(other_income.toLocaleString());
      $('#income-sell-3').html(other_income.toLocaleString());
      $('#income-sell-4').html(situgyou_other.toLocaleString());
      $('#income-sell-5').html(situgyou_other.toLocaleString());
      $('#income-sell-6').html(situgyou_other.toLocaleString());
      $('#income-sell-7').html(situgyou_other.toLocaleString());
      $('#income-sell-8').html(situgyou_other.toLocaleString());
      $('#income-sell-9').html(other_income.toLocaleString());
      $('#income-sell-10').html(other_income.toLocaleString());
      $('#income-sell-11').html(other_income.toLocaleString());
      $('#income-sell-12').html(other_income.toLocaleString());
    };
    // 給付制限なし90日
    if($('#limit_false').prop('checked') && $('#benefit_date_date90').prop('checked')){
      $('#income-sell-1').html(income_sum.toLocaleString());
      $('#income-sell-2').html(situgyou_other.toLocaleString());
      $('#income-sell-3').html(situgyou_other.toLocaleString());
      $('#income-sell-4').html(other_income.toLocaleString());
      $('#income-sell-5').html(other_income.toLocaleString());
      $('#income-sell-6').html(other_income.toLocaleString());
      $('#income-sell-7').html(other_income.toLocaleString());
      $('#income-sell-8').html(other_income.toLocaleString());
      $('#income-sell-9').html(other_income.toLocaleString());
      $('#income-sell-10').html(other_income.toLocaleString());
      $('#income-sell-11').html(other_income.toLocaleString());
      $('#income-sell-12').html(other_income.toLocaleString());
    };
    // 給付制限なし120日
    if($('#limit_false').prop('checked') && $('#benefit_date_date120').prop('checked')){
      $('#income-sell-1').html(income_sum.toLocaleString());
      $('#income-sell-2').html(situgyou_other.toLocaleString());
      $('#income-sell-3').html(situgyou_other.toLocaleString());
      $('#income-sell-4').html(situgyou_other.toLocaleString());
      $('#income-sell-5').html(other_income.toLocaleString());
      $('#income-sell-6').html(other_income.toLocaleString());
      $('#income-sell-7').html(other_income.toLocaleString());
      $('#income-sell-8').html(other_income.toLocaleString());
      $('#income-sell-9').html(other_income.toLocaleString());
      $('#income-sell-10').html(other_income.toLocaleString());
      $('#income-sell-11').html(other_income.toLocaleString());
      $('#income-sell-12').html(other_income.toLocaleString());
    };
    // 給付制限なし120日
    if($('#limit_false').prop('checked') && $('#benefit_date_date150').prop('checked')){
      $('#income-sell-1').html(income_sum.toLocaleString());
      $('#income-sell-2').html(situgyou_other.toLocaleString());
      $('#income-sell-3').html(situgyou_other.toLocaleString());
      $('#income-sell-4').html(situgyou_other.toLocaleString());
      $('#income-sell-5').html(situgyou_other.toLocaleString());
      $('#income-sell-6').html(other_income.toLocaleString());
      $('#income-sell-7').html(other_income.toLocaleString());
      $('#income-sell-8').html(other_income.toLocaleString());
      $('#income-sell-9').html(other_income.toLocaleString());
      $('#income-sell-10').html(other_income.toLocaleString());
      $('#income-sell-11').html(other_income.toLocaleString());
      $('#income-sell-12').html(other_income.toLocaleString());
    };
  };
  
  // 現在の貯蓄の合計計算とtable編集
  $('.stock-form').on('input',function(){
    const stock = parseInt( $( '#stock-form' ).val() );
    $('#stock-sum').html(stock.toLocaleString());
    $('#stock-0').html(stock.toLocaleString());
  });

  // tableの貯蓄の合計計算
  $('.create-btn').on('click',function(){

    function removeComma(number) {
      const removed = number.replace(/,/g, '');
      return parseInt(removed);
    }

    let income_1 = $( '#income-sell-1' ).text();
    income_1 = removeComma(income_1);
    let income_2 = $( '#income-sell-2' ).text();
    income_2 = removeComma(income_2);
    let income_3 = $( '#income-sell-3' ).text();
    income_3 = removeComma(income_3);
    let income_4 = $( '#income-sell-4' ).text();
    income_4 = removeComma(income_4);
    let income_5 = $( '#income-sell-5' ).text();
    income_5 = removeComma(income_5);
    let income_6 = $( '#income-sell-6' ).text();
    income_6 = removeComma(income_6);
    let income_7 = $( '#income-sell-7' ).text();
    income_7 = removeComma(income_7);
    let income_8 = $( '#income-sell-8' ).text();
    income_8 = removeComma(income_8);
    let income_9 = $( '#income-sell-9' ).text();
    income_9 = removeComma(income_9);
    let income_10 = $( '#income-sell-10' ).text();
    income_10 = removeComma(income_10);
    let income_11 = $( '#income-sell-11' ).text();
    income_11 = removeComma(income_11);
    let income_12 = $( '#income-sell-12' ).text();
    income_12 = removeComma(income_12);

    let spend_1 = $( '#spending-sell-1' ).text();
    spend_1 = removeComma(spend_1);
    let spend_2 = $( '#spending-sell-2' ).text();
    spend_2 = removeComma(spend_2);
    let spend_3 = $( '#spending-sell-3' ).text();
    spend_3 = removeComma(spend_3);
    let spend_4 = $( '#spending-sell-4' ).text();
    spend_4 = removeComma(spend_4);
    let spend_5 = $( '#spending-sell-5' ).text();
    spend_5 = removeComma(spend_5);
    let spend_6 = $( '#spending-sell-6' ).text();
    spend_6 = removeComma(spend_6);
    let spend_7 = $( '#spending-sell-7' ).text();
    spend_7 = removeComma(spend_7);
    let spend_8 = $( '#spending-sell-8' ).text();
    spend_8 = removeComma(spend_8);
    let spend_9 = $( '#spending-sell-9' ).text();
    spend_9 = removeComma(spend_9);
    let spend_10 = $( '#spending-sell-10' ).text();
    spend_10 = removeComma(spend_10);
    let spend_11 = $( '#spending-sell-11' ).text();
    spend_11 = removeComma(spend_11);
    let spend_12 = $( '#spending-sell-12' ).text();
    spend_12 = removeComma(spend_12);

    let stock_0 = $( '#stock-0' ).text();
    stock_0 = removeComma(stock_0);

    const stock_1 = stock_0 + income_1 - spend_1
    $('#stock-1').html(stock_1.toLocaleString());
    const stock_2 = stock_1 + income_2 - spend_2
    $('#stock-2').html(stock_2.toLocaleString());
    const stock_3 = stock_2 + income_3 - spend_3
    $('#stock-3').html(stock_3.toLocaleString());
    const stock_4 = stock_3 + income_4 - spend_4
    $('#stock-4').html(stock_4.toLocaleString());
    const stock_5 = stock_4 + income_5 - spend_5
    $('#stock-5').html(stock_5.toLocaleString());
    const stock_6 = stock_5 + income_6 - spend_6
    $('#stock-6').html(stock_6.toLocaleString());
    const stock_7 = stock_6 + income_7 - spend_7
    $('#stock-7').html(stock_7.toLocaleString());
    const stock_8 = stock_7 + income_8 - spend_8
    $('#stock-8').html(stock_8.toLocaleString());
    const stock_9 = stock_8 + income_9 - spend_9
    $('#stock-9').html(stock_9.toLocaleString());
    const stock_10 = stock_9 + income_10 - spend_10
    $('#stock-10').html(stock_10.toLocaleString());
    const stock_11 = stock_10 + income_11 - spend_11
    $('#stock-11').html(stock_11.toLocaleString());
    const stock_12 = stock_11 + income_12 - spend_12
    $('#stock-12').html(stock_12.toLocaleString());


    $('.stock-cell').each(function(){
      if ($(this).text().match(/-/)){
        $(this).css('color', 'red')
      }else{
        $(this).css('color', 'black')
      }
    });
  });
});