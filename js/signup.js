$(document).ready(function() {
  $('.button-checkbox').each(function() {
    // Declaramos variables
    var $widget = $(this),
      $button = $widget.find('button'),
      $checkbox = $widget.find('input:checkbox'),
      color = $button.data('color'),
      settings = {
        on: {
          icon: 'glyphicon glyphicon-check'
        },
        off: {
          icon: 'glyphicon glyphicon-unchecked'
        }
      };

    // Eventos
    $button.on('click', function() {
      $checkbox.prop('checked', !$checkbox.is(':checked'));
      $checkbox.triggerHandler('change');
      updateDisplay();
    });
    $checkbox.on('change', function() {
      updateDisplay();
    });

    // Acciones
    function updateDisplay() {
      var isChecked = $checkbox.is(':checked');

      // Definir si el recuadro está o no marcado
      $button.data('state', (isChecked) ? 'on' : 'off');

      // Cambiar de icon 
      $button.find('.state-icon')
        .removeClass()
        .addClass('state-icon ' + settings[$button.data('state')].icon);

      // Update the button's color
      if (isChecked) {
        $button
          .removeClass('btn-default')
          .addClass('btn-' + color + ' active');
      } else {
        $button
          .removeClass('btn-' + color + ' active')
          .addClass('btn-default');
      }
    }

    // Initialization
    function init() {
      updateDisplay();

      // Inject the icon if applicable
      if ($button.find('.state-icon').length == 0) {
        $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
      }
    }
    init();
  });

  // Login with facebook, twitter and google

  $('.facebook').click(function() {
    console.log('facebook');
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile, user_birthday');
    provider.setCustomParameters({
      'display': 'popup'
    });
    console.log(provider);

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      console.log(provider);
      // The signed-in user info.
      var user = result.user;
      console.log(provider);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      var email = error.email;
      var credential = error.credential;
    });
  });

  $('.twitter').click(function() {
    var provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // For accessing the Twitter API.
      var token = result.credential.accessToken;
      var secret = result.credential.secret;
      // The signed-in user info.
      var user = result.user;
      var data = user.providerData[0];
    }).catch(function(error) {
      console.log(error);
    });
  });

  $('.google').click(function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      var email = error.email;
      var credential = error.credential;
    });
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      console.log(displayName);
      var email = user.email;
      console.log(email);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      console.log(photoURL);
      var uid = user.uid;
      console.log(uid);
      window.location = '/views/movie-list.html';
    } else {
      console.log('user is signed out or not exist');
      // window.location = '/views/home.html';
    }
  });
});
