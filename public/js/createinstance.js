


$(document).ready(function(){

  var $warning = $('.warning');

  var x = document.forms["myForm"]["eventdate"].value;
  if ( x == "2015-09-08"){
    $warning.show();
  }
  else {
    $warning.hide();
  }

})
