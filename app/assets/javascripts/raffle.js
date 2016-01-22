var myApp = angular.module('myApp',[]);

myApp.controller('RaffleCtrl', ['$scope', function($scope) {
  $scope.entries = [
    {
      name: "Mike"
    }, {
      name: "Becca"
    }, {
      name: "Nicole"
    }
  ];
  $scope.addEntry = function() {
  	$scope.entries.push($scope.newEntry);
  	$scope.newEntry = {};
  }

}]);