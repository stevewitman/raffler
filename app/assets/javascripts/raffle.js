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
  };

  $scope.drawWinner = function() {
  	pool = [];
  	angular.forEach($scope.entries, function(entry) {
  		if (!entry.winner) {
  		 	this.push(entry)
  		}
  	}, pool);
  	if (pool.length > 0) {
	  	entry = pool[Math.floor(Math.random()*pool.length)];
	  	entry.winner = true;
	  	$scope.lastWinner = entry
  	}
  };

}]);
