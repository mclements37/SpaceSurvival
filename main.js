var myModule = angular.module("myApp", []);

myModule.controller("myController",['$scope','$timeout', function($scope,$timeout){
	$scope.oxygenLevel = 100;
	$scope.heatLevel = 100;
	$scope.batteryLevel = 100;
	$scope.shieldLevel = 100;

	$scope.addOxygen = function() {
		if ($scope.oxygenLevel < 100) {
			$scope.oxygenLevel++;
			$('#oxygenBar').css('width', $scope.oxygenLevel + "%");
		}
	};

	$scope.rechargeShield = function() {
		if ($scope.shieldLevel < 100) {
			$scope.shieldLevel++;
			$('#shieldBar').css('width', $scope.shieldLevel + "%");
		}
	};

	$scope.useHeater = function() {
		if ($scope.heatLevel < 100) {
			$scope.heatLevel++;
			$('#heatBar').css('width', $scope.heatLevel + "%");
		}
	};

	$scope.rechargeBattery = function() {
		if ($scope.batteryLevel < 100) {
			$scope.batteryLevel++;
			$('#batteryBar').css('width', $scope.batteryLevel + "%");
		}
	};


	$scope.countdown = function() {
		stopped = $timeout(function() {
			$scope.oxygenLevel--;  
			$scope.oxygenLevel--;  
			$scope.heatLevel--;  
			$scope.batteryLevel--;  
			$scope.shieldLevel--;  
			$('#oxygenBar').css('width', $scope.oxygenLevel + "%");
			$('#batteryBar').css('width', $scope.batteryLevel + "%");
			$('#heatBar').css('width', $scope.heatLevel + "%");
			$('#shieldBar').css('width', $scope.shieldLevel + "%");
			if ($scope.oxygenLevel == 0) {
				alert("You let your oxygen level run out and tragically suffocated. Game over.");
				$scope.heatLevel = 0;
				$scope.batteryLevel = 0;
				$scope.shieldLevel = 0;
			}
			else if ($scope.shieldLevel == 0) {
				alert("You let your shield level all the way down and became completely vulenerable. Game Over!");
				$scope.oxygenLevel = 0;
				$scope.heatLevel = 0;
				$scope.batteryLevel = 0;
			}
			else if ($scope.heatLevel == 0) {
				alert("You let your temperature drop to below freezing and froze to death. Game Over!");
				$scope.oxygenLevel = 0;
				$scope.batteryLevel = 0;
				$scope.shieldLevel = 0;
			}
			else if ($scope.batteryLevel == 0) {
				alert("You let your ship's battery level reach zero powering down your entire ship. Game Over!");
				$scope.oxygenLevel = 0;
				$scope.heatLevel = 0;
				$scope.shieldLevel = 0;
			}
			$scope.countdown();   
		}, 500);
	};

	var stopped;
	$scope.stop = function(){
		$timeout.cancel(stopped);

	};


}]);