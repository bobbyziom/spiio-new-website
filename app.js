angular.module('spiio', [])


  .controller('SpiioCtrl', function($scope) {
    
    $scope.init = function() {
      $scope.calc = false;
      $scope.number = 4;
      $scope.error = false; 
      $scope.payment = false; 
      $scope.signup = false;
    };
    
    $scope.calcPrice = function() {
      if($scope.number > 0) {
        $scope.calc = true;
      } else {
        $scope.error = true;
      }
    };

    $scope.showDetails = function() {
      $scope.signup = true;
    };

    $scope.showPayment = function() {
      $scope.payment = true;
    };


  });