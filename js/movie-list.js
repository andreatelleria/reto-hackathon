$(document).ready(() => {
  // Dando un evento al formulario
  $('#searchForm').on('submit', (event) => {
    // declarando la variable para el input de busqueda
    var searchText = $('#searchText').val();
    // Llamando a la función con parámetros
    getMovies(searchText);
    event.preventDefault();
  });
});

// 
function getMovies(searchText) {
  // conexion con axios para acceder al api del omdb, le pasamos el parametro de s para la busqueda de search y le pasamos la llave 
  // para acceder a la informacion
  axios.get('http://www.omdbapi.com?s=' + searchText + '&apikey=510e70b6')
    .then((response) => {
      // declarando la variable para acceder a las peliculas
      var movies = response.data.Search;
      // Para poder llenar los datos dinamicamente, creamos la variable
      var dataHtml = '';
      // Hacemos un recorrido para acceder al index de la pelicula 
      $.each(movies, (index, movie) => {
        // Llenamos mediante el html y agregamos la etiqueta a
        dataHtml += `
          <div class="col-md-3">
            <div class="well text-center">
              <a href="movie-info.html"><img src="${movie.Poster}" class="img-responsive"></a>
              <h5>${movie.Title}</h5>
            </div>
          </div>
        `;
      });
      $('#movies').html(dataHtml);
    })
    // uso del catch para filtrar cualquier error
    .catch((err) => {
      alert('Error, cerrar la pag');
    });
}

function getMovie() {
  // para guardar la imagen de la pelicula mostrada
  var movieId = sessionStorage.getItem('movieId');
  axios.get('http://www.omdbapi.com?s=' + movieId + '&apikey=510e70b6')
    .then((response) => {
      var movie = response.data;
      $('#movie').html(dataHtml);
    })
    .catch((err) => {
      alert('Error, cerrar la pag');
    });
}