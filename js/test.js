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

            }

