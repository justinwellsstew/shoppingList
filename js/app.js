$(document).ready(function(){
  $('#add-item').click(function(){  
    var item = $('input').val();
    $('#need >ol').append('<li>' + item + '</li>')
  });
});  