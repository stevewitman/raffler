var myApp = angular.module('myApp',[]);

myApp.controller('RaffleCtrl', ['$scope', function($scope) {
  return $scope.entries = [
    {
      name: "Mike"
    }, {
      name: "Becca"
    }, {
      name: "Nicole"
    }
  ];
}]);