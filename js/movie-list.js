$(document).ready(function() {
  // declaracion de variables

  // botones
  var $btnSearch = ('#btnSearch');
  var $btnSignup = ('#btnSignup');
  var $btnRegister = ('#btnRegister');

  // dropdown
  var $selectGender = ('#selectGender');
  var $selectProductor = ('#selectProductor');

  // eventos
  // para los botones el evento click
  $btnSignup.on('click', function(event) {
    event.preventDefault();
    window.location.href = '../views/signup.html';
  });

  $btnRegister.on('click', function(event) {
    event.preventDefault();
    window.location.href = '../views/register.html';
  });

  $selectGender.on('change', function(event) {
    event.preventDefault();
  });

  $selectProductor.on('change', function(event) {
    event.preventDefault();
  });
});

// implementando con aja

// function getMovies(searchText) {
//   alert('estamos aqui');
//   axios.get('http://www.omdbapi.com?s=' + searchText + '&apikey=510e70b6') 
//     .then((response) => {
//       console.log(response);
//       var movies = response.data.Search;
//       var output = '';
//       $.each(movies, (index, movie) => {
//         output += `
//        <div class="col-md-3">
//          <div class="well text-center">
//          <img src="${movie.Poster}" >
//            <img src = " https://image.tmdb.org/t/p/w500/${movie.poster_path}">
//            <h5>${movie.Title}</h5>
//            <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
//          </div>
//        </div>
//      `;
//       });

//       $('#movies').html(output);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }