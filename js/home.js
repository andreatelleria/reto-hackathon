var target = 0;

var loadPage = function () {
    // Elementos
    var $buttons = $('.control');
    var $previous = $('.previous');
    var $next = $('.next');

    // Eventos
    var showImage = function (target) {
        var $lastSlide = $('div.active');
        var $slide = $("div[data-slide='" + target + "']");
        $lastSlide.removeClass("active");
        $slide.addClass("active");
    }

    $buttons.click(function() {
        target = parseInt($(this).data('target'));
        console.log($(this).data('target'));
        console.log(target);
        showImage(target);
    });

    $previous.click(function(e) {
        e.preventDefault ();
        target = target -1;
        target = (target < 0) ? 3 : target;
        showImage(target);
    });

    $next.click(function (e) {
        e.preventDefault();
        target = target + 1;
        target = (target > 3) ? 0: target;
        showImage(target);
    });

    

};

$(document).ready(loadPage);