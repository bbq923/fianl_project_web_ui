$(document).ready(function(){
    'use strict';
    var $carousel = $('.carousel');
    $('#carousel-left-btn').on('click', carouselAnimation);
    $('#carousel-right-btn').on('click', carouselAnimation);

    function carouselAnimation(){
        if($carousel.css('marginLeft') === '0px'){
            $('.carousel').animate({marginLeft:-1035}, 1000);
        } else {
            $('.carousel').animate({marginLeft:0}, 1000);
        }
    }
});