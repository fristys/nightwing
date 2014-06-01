$(function(){
  /**
   * FitText.js global settings
   */

  /* Index Heading */
  $('header').find('h1').fitText(1, {minFontSize: '28px'});
  $('header').find('h2').fitText(1, {minFontSize: '15px', maxFontSize: '30px'});

  /* Other Pages' Heading */
  $('header.other').find('h1').fitText(1, {minFontSize: '25px', maxFontSize : '60px'});
  $('header.other').find('h2').fitText(1, {minFontSize: '13px', maxFontSize: '25px'});

  $('header').find('.download').fitText(1, {minFontSize:'14px', maxFontSize: '20px'});
  $('header').find('nav').fitText(1, {minFontSize:'13px', maxFontSize: '18px'});

  $('#content').find('h3').fitText(1, {minFontSize:'14px', maxFontSize: '20px'});
  $('#content').find('p').fitText(1, {minFontSize:'13px', maxFontSize: '15px'});

  $('footer').fitText(1, {minFontSize:'11px', maxFontSize: '13px'});
});