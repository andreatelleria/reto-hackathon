$(document).ready(function() {
  // declaracion de variables
  var $searchText = ('#searchText');
  var $values = ['disney', 'pixar', 'dream', 'warner', 'ghibli'];
  // botones
  var $btnSearch = ('#btnSearch');
  var $btnSignup = ('#btnSignup');
  var $btnRegister = ('#btnRegister');

  // dropdown
  var $selectGender = ('#selectGender');
  var $selectProductor = ('#selectProductor');

  // eventos
  // para los botones el evento click
  // $btnSignup.on('click', function(event) {
  //   event.preventDefault();
  //   window.location.href = '../views/signup.html';
  // });

  $btnSearch.on('submit', function(event) {
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
  });
});

// otra forma
// $selectGender.on('change', function(event) {
//   event.preventDefault();
// });
// function apiCall() {
//   $.getJSON('http://www.omdbapi.com?s=' + encodeURI($values[0])) + '&apikey=510e70b6'.then(function(response) {
//     ('section-img-produc > figure').append('<img class="img-responsive" src=' + ${response.Poster} + '>');
//   });
// }
