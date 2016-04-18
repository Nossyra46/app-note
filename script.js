var app = angular.module('appNote', []);

app.controller('noteCtrl', function($scope) {
	// body...
	$scope.text = "";
	$scope.memory = "";
	$scope.status = 0;

	$scope.$watch('text', function (newValue, oldValue) {
    	if($scope.text.length > 100) {
    		$scope.text = oldValue;
    	}
  	});

  	$scope.$watch('text', function (newValue, oldValue) {
    	if($scope.text.length > 0) {
    		$scope.memory = "Note modifiée";
    		$scope.status = 1;
    	}
  	});

	$scope.erase = function(){
		$scope.text='';
		$scope.memory = "Note supprimée !";
		$scope.status = 2;
	}

	$scope.save = function(){
		$scope.text='';
		$scope.memory = "Note sauvegardée";
		$scope.status = 3;
	}

});