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


    var contentLastMarginLeft = 0;
    $(".wrap").click(function() {
        var box = $(".content");
        var newValue = contentLastMarginLeft;
        contentLastMarginLeft = box.css("margin-left");
        box.animate({
            "margin-left": newValue
        }, 500);
    });
});