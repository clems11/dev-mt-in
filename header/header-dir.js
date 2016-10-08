app.directive('header', function() {
    return {
      templateUrl: './header/header-temp.html'
      , controller: function($scope) {
        console.log('header');
      }
    }
  })
