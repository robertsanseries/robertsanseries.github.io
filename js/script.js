$(document).ready(function() {
    var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        return false;
    });

    $('#item-ciano').hover(function() {
        $('#fas-ciano').toggleClass('fas-hover');
    });

    $('#item-karim').hover(function() {
        $('#fas-karim').toggleClass('fas-hover');
    });

    var nav = $('.item-none');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 105) {
            $('.topnav').css('background', '#353535');
            $('.topnav a').css('color', 'white');
            nav.slideDown();
        } else {
            $('.topnav').css('background', 'white');
            $('.topnav a').css('color', 'black');
            nav.slideUp();
        }
    });

    $("#item-ciano").click(function() {
        var div_apps_ciano = $("#div-apps");
        div_apps_ciano.animate({
            width: 'toggle'
        }, function(){
            var div_ciano = $("#content-ciano");
            div_ciano.animate({
                width: 'toggle'
            });
        });        
    });

    $("#item-karim").click(function() {
        var div_apps_karim = $("#div-apps");
        div_apps_karim.animate({
            width: 'toggle'
        }, function(){
            var div_karim = $("#content-karim");
            div_karim.animate({
                width: 'toggle'
            });
        });        
    });
});