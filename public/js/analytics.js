'use strict';

$(document).ready(function() {

  var $library    =  $('.library'),
      $programs   =  $('.programs'),
      $graphtype  =  $('.graphtype'),
      $graph      =  $('.graph'),
      $libraryinc   = $('.libraryinc'),
      $programsinc  = $('.programsinc'),
      $graphinc     = $('.graphinc');



  $('.malvernbtn').click(function(){
    $programs.hide();
    $graph.hide();
    $library.show();
  });

  $('.eslbtn').click(function(){
    $programs.show();
  });

  $('.agebtn').click(function(){
    $graphtype.show();
  });

  $('.analyzebtn').click(function(){
    $graph.show();
  });

  $('.resetbtn').click(function(){
    $library.hide();
    $programs.hide();
    $graphtype.hide();
    $graph.hide();
  });

  $('.agincourtbtn').click(function(){
    $libraryinc.show();
    $programsinc.hide();
    $graphinc.hide();
  });

  $('.babytimebtn').click(function(){
    $programsinc.show();
  })

  $('.incidencebtn').click(function(){
    $graphinc.show();
  })

});
