$(document).ready(function(){
  $('#add-item').click(function(){ 
     var listLength = $('#need  li').length;
    if(listLength > -1){
      $('#need p').hide();
    }; 
    var item = $('input').val();
    $('#need >ol').append('<li>' + item + '</li>');
  
  });

  $('ol').on('click', 'li', function(){

    //check whether items are in cart
    var cartLength = $('#incart  li').length;
    
    //hide message if items are in Cart
    if(cartLength > -1){
      $('#incart p').hide();
    };

    //add item to variable
    var shoppingListItem = $(this).text();

    //add item to cart
    $('#incart >ol').append('<li>' + shoppingListItem + '</li>');

    //remove item from shopping list to incart list
    $(this).remove();
  });

  //clear shopping cart
  $('#clear-cart').click(function(){
    $('#incart >ol').children().remove();
  });
});

