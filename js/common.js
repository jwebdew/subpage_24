$(function(){
    
    $('.pc.nav .gnb > li').mouseenter(function(){
        $(this).find('.depth02').stop().slideDown()
    });

    $('.pc.nav .gnb > li').mouseleave(function(){
        $('.pc .depth02').stop().slideUp();
    });

    $('.mobile.button').click(function(){
        $('.mobile.nav').animate({
            right : '0'
        })
    });
    
});