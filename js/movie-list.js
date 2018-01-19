$(document).ready(function () {
    // constante de url para imagenes de MovieDB
    const PRE_IMAGE_URL = 'http://image.tmdb.org/t/p/w500';
    const API_KEY = 'ebe4cf809a40ed06fdfcace1b2c3d57b';
    const VALID_GENRE = 16;

    let searchMovie = localStorage.getItem('searchMovie');
    console.log(searchMovie);
    if (searchMovie != null && searchMovie.trim().length > 0) {
        var callback = function (data) {
            $.each(data['results'], function(key, value) {
                if ($.inArray(VALID_GENRE, value['genre_ids']) === 0) {
                    var title = value['original_title'];
                    var poster = PRE_IMAGE_URL + value['poster_path'];
                    var content = value['overview'];

                    // GENERAR HTML DINAMICO


                }
            });
            localStorage.removeItem('searchMovie');
        }
        findByQuery(searchMovie, callback);
    }

    // load combo genre with
    $.getJSON('https://api.themoviedb.org/3/genre/movie/list', {
        api_key: API_KEY
    }, function (data) {
        var $genderDropDown = $('#selectGender');
        $.each(data['genres'], function (key, value) {
            if (value['name'] === 'Animation') {
                $genderDropDown.append($("<option/>").val(value['id']).text(value['name']).prop('selected', 'true'));
            } else {
                $genderDropDown.append($("<option/>").val(value['id']).text(value['name']).prop('disabled', 'true'));
            }

        });
    });

    $('#searchText').keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            if ($('#searchText').val() != null
                && $('#searchText').val().trim().length > 0) {
                var callback = function (data) {
                    $.each(data['results'], function(key, value) {
                        if ($.inArray(VALID_GENRE, value['genre_ids']) === 0) {
                            // es una pelicula animada
                            console.log(value['original_title']);
                            console.log(value['poster_path']);
                            console.log(value['overview']);

                            // GENERAR HTML DINAMICO

                        }
                    });
                }
                findByQuery($('#searchText').val(), callback);
            }
        }
    });

    // eventos
    $('#btnRegister').on('click', function (event) {
        event.preventDefault();
        window.location.href = '../views/register.html';
    });

    $('#selectGender').on('change', function (event) {
        event.preventDefault();
    });

    // crear metodos de busqueda
    function findByQuery(query, callback) {
        $.getJSON('https://api.themoviedb.org/3/search/movie', {
            api_key: API_KEY,
            query: query,
            include_adult: false
        }, function (data) {
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

    /*  $btnSearch.on('submit', function(event) {
    event.preventDefault();
    axios.get('http://www.omdbapi.com?s=' + $searchText + '&apikey=510e70b6')
      .then((response) => {
        console.log(response);
        var movies = response.data.Search;
        var output = '';
        $.each(movies, (index, movie) => {
          output += `
        <div class="col-md-3">
          <div class="well text-center">
            <img src="${movie.Poster}" class="img-responsive">
            <h5>${movie.Title}</h5>
            <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
          </div>
        </div>
      `;
        });

        $('#movies').html(output);
      })
      .catch((err) => {
        console.log(err);
      });

    function getMovie() {
      var movieId = sessionStorage.getItem('movieId');

      axios.get('http://www.omdbapi.com?i=' + movieId + '&apikey=510e70b6')
        .then((response) => {
          console.log(response);
          var movie = response.data;

          var output = `
            <div class="row">
              <div class="col-md-4">
                <img src="${movie.Poster}" class="thumbnail">
              </div>
              <div class="col-md-8">
                <h2>${movie.Title}</h2>
                <ul class="list-group">
                  <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                  <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                  <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                  <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                  <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                  <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                  <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="well">
                <h3>Plot</h3>
                ${movie.Plot}
                <hr>
                <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                <a href="index.html" class="btn btn-default">Go Back To Search</a>
              </div>
            </div>
          `;

          $('#movie').html(output);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });*/

});