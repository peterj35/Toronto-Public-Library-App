'use strict';

$(document).ready(function() {

  var $library    =  $('.library'),
      $programs   =  $('.programs'),
      $graphtype  =  $('.graphtype'),
      $graph      =  $('.graph');


  $('.malvernbtn').click(function(){
    $programs.hide();
    $graphtype.hide();
    $graph.hide();
    $library.show();
  });

  $('.eslbtn').click(function(){
    $graphtype.hide();
    $graph.hide();
    $programs.show();
  });

  $('.participantbtn').click(function(){
    $graphtype.show();
    $graph.show();
  });

  $('.resetbtn').click(function(){
    $library.hide();
    $programs.hide();
    $graphtype.hide();
    $graph.hide();
  });

});
