app.directive('footer', function(){
  return {
    templateUrl: './footer/footer-temp.html'
    , controller: function($scope) {
      console.log('footer');
    }
  }
})
