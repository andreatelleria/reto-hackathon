// Slider

$(document).ready(function() {

    $('#searchText').keypress(function(e) {
        if(e.which == 13) {
            console.log('You pressed enter!');
            if ($('#searchText').val() != null
                && $('#searchText').val().trim().length > 0) {
                // redirigir a movie-list.html
                // almacenar valor a buscar
                console.log($('#searchText').val());
                localStorage.setItem("searchMovie", $('#searchText').val());
                window.location = '/reto-hackathon/views/movie-list.html';
            }
        }
    });

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

    $('#signup').click(function () {
        window.location.href = '../views/signup.html';
    });

    $('#login').click(function () {
        window.location.href = '../views/login.html';
    });

});
