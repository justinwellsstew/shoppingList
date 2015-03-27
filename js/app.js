$(document).ready(function(){
  $('#add-item').click(function(){  
    var item = $('input').val();
    $('#need >ol').append('<li>' + item + '</li>');
  });

  $('ol').on('click', 'li', function(){
    var shoppingListItem = $(this).text();
    $('#incart >ol').append('<li>' + shoppingListItem + '</li>');
    $(this).remove();
  });

  $('#clear-cart').click(function(){
    $('#incart >ol').children().remove();
  });
  var listLength = $('#need > ol').children().length;
  if(listLength < 1){
    $('#need').append('<p>Add some items to you list</p>');
  };
  var cartLength = $('#need > ol').children().length;
  if(cartLength < 1){
    $('#incart').append('<p>Your cart is currently empty</p>');
  };
});  