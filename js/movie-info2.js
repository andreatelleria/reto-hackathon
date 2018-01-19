<<<<<<< HEAD

=======
$(document).ready(function () {
    // constante de url para imagenes de MovieDB
    const PRE_IMAGE_URL = 'http://image.tmdb.org/t/p/w500';
    const API_KEY = 'ebe4cf809a40ed06fdfcace1b2c3d57b';
    const VALID_GENRE = 16;

    $('#searchText').keypress(function (e) {
        if (e.which == 13) {
            console.log("ENTER");
            e.preventDefault();
            if ($('#searchText').val() != null
                && $('#searchText').val().trim().length > 0) {
                var callback = function (data) {
                    $.each(data['results'], function (key, value) {
                        if ($.inArray(VALID_GENRE, value['genre_ids']) === 0) {
                            // es una pelicula animada
                            var title = value['original_title'];
                            var poster = PRE_IMAGE_URL + value['poster_path'];
                            var content = value['overview'];
                            var releaseDate = value['release_date'];

                            // GENERAR HTML DINAMICO
                            var divSingle = $('<div></div>').addClass('single_column');
                            var innerSection = $('<section></section>').addClass('images inner');
                            var divPoster = $('<div></div>').addClass('poster');
                            var divImageContent = $('<div></div>').addClass('image_content');
                            var img = $('<img></img>').attr('src', poster);
                            divImageContent.append(img);
                            divPoster.append(divImageContent);
                            innerSection.append(divPoster);

                            var divHeader = $('<div></div>').addClass('header_poster_wrapper');
                            var divTitle = $('<div></div>').addClass('title');
                            var span = $('<span></span>');
                            var anchor = $('<a></a>').attr('href', '#');
                            var h2 = $('<h2></h2>').addClass('11').text(title);
                            anchor.append(h2);
                            var spanRelease = $('<span></span>').addClass('release_date').text(releaseDate);
                            span.append(anchor)
                            span.append(spanRelease);
                            divTitle.append(span);
                            divHeader.append(divTitle);
                            innerSection.append(divHeader);

                            var divHeaderInfo = $('<div></div>').addClass('header_info');
                            var divOverview = $('<div></div>').addClass('overview');
                            var paragraph = $('<p></p>').text(content);
                            divOverview.append(paragraph);
                            divHeaderInfo.append(divOverview);
                            innerSection.append(divHeaderInfo);

                            divSingle.append(innerSection);

                            $('.image-container').append(divSingle);

                            console.log(divSingle);

                            /*
                                <div class="single_column">
                <section class="images inner">
                    <div class="poster">
                        <div class="image_content">
                            <img class="poster"
                                 src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/qC6UZX9Jc7DVyN5lFFDPvJBclHM.jpg"
                                 alt="Los Minions">
                        </div>
                    </div>
                    <div class="header_poster_wrapper">
                        <div class="title" dir="auto">
                          <span>
                            <a href="#">
                              <h2 class="11">Los Minions</h2>
                            </a>
                            <span class="release_date">(2015)</span>
                          </span>
                        </div>
                        <div class="header_info">
                            <h3 dir="auto">General</h3>
                            <div class="overview" dir="auto">
                                <p>La historia de Los Minions se remonta al principio de los tiempos. Empezaron
                                    siendo organismos amarillos
                                    unicelulares que evolucionaron a través del tiempo, poniéndose siempre al
                                    servicio de los amos más
                                    despreciables. Ante su incapacidad para mantener a esos amos – desde el T. Rex a
                                    Napoleón –, los Minions
                                    acaban encontrándose solos y caen en una profunda depresión. Sin embargo, uno de
                                    ellos, llamado Kevin,
                                    tiene un plan. Acompañado por el rebelde Stuart y el adorable Bob, emprende un
                                    emocionante viaje para
                                    conseguir una jefa a quien servir, la terrible Scarlet Overkill. Pasarán de la
                                    helada Antártida, a
                                    la ciudad de Nueva York en los años sesenta, para acabar en el Londres de la
                                    misma época, donde deberán
                                    enfrentarse al mayor reto hasta la fecha: salvar a la raza Minion de la
                                    aniquilación.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                             */

                        }
                    });
                }
                findByQuery($('#searchText').val(), callback);
            }
        }
    });

    // crear metodos de busqueda
    function findByQuery(query, callback) {
        $.getJSON('https://api.themoviedb.org/3/search/movie', {
            api_key: API_KEY,
            query: query,
            include_adult: false
        }, function (data) {
            console.log(data);
            callback(data);
        });
    }

    function listAnimationMovie(callback) {
        $.getJSON('https://api.themoviedb.org/3/genre/16/movies', {
            api_key: API_KEY,
            adult: false
        }, function (data) {
            callback(data);
        })
    }

});
>>>>>>> 120cd46bed1cb249fafe266fb0ba9b7188d7b1ab
