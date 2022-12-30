$(function(){
    $('#login-show').click(function(){
        $('#login-model').fadeIn().css("display","flex");
    });

    $('.close-model').click(function(){
        $('#login-model').fadeOut();
    });
});