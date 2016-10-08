app.controller('mainControl', function($scope, myService){
  // $scope.test = 'hi';
  $scope.name = '';
  var name = $scope.name;

  $scope.showName = function(name) {
    console.log(name);
  }

})
