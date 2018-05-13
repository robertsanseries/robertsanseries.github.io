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
});