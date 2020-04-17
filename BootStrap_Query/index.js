
$(document).ready(function(){
    $('.header').height($(window).height()); 

    $("button").focus(function(){
        $(this).css("background-color", "lightblue");
        $(this).css("color", "red");
    });

    $(".nav-link").focus(function(){
        $(this).hide();
    });

    $(".navbar-brand").on("click", function(){
        location.reload(true);
    });
});