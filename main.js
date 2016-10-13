var myModule = angular.module("myApp", []);

myModule.controller("myController",['$scope','$timeout', function($scope,$timeout){
	$scope.oxygenLevel = 100;
	$scope.heatLevel = 100;
	$scope.batteryLevel = 100;
	$scope.shieldLevel = 100;
	$scope.test = 0;

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
			$scope.oxygenLevel -= 3;  
			$scope.heatLevel -= 2;  
			$scope.batteryLevel -= 1;  
			$scope.shieldLevel -= 2;
			$scope.test++;  
			$('#oxygenBar').css('width', $scope.oxygenLevel + "%");
			$('#batteryBar').css('width', $scope.batteryLevel + "%");
			$('#heatBar').css('width', $scope.heatLevel + "%");
			$('#shieldBar').css('width', $scope.shieldLevel + "%");
			if ($scope.oxygenLevel == -3 || $scope.oxygenLevel == -1 || $scope.oxygenLevel == -2) {
				alert("You let your oxygen level run out and tragically suffocated. Game over! You lasted " + $scope.test + " seconds!");
				$scope.heatLevel = 0;
				$scope.batteryLevel = 0;
				$scope.shieldLevel = 0;
				$scope.stop();
				
			}
			else if ($scope.shieldLevel == -2 || $scope.shieldLevel == -1) {
				alert("You let your shield level all the way down and became completely vulenerable. Game Over! You lasted " + $scope.test + " seconds!");
				$scope.oxygenLevel = 0;
				$scope.heatLevel = 0;
				$scope.batteryLevel = 0;
				$scope.stop();
			}
			else if ($scope.heatLevel == -2 || $scope.heatLevel == -1) {
				alert("You let your temperature drop to below freezing and froze to death. Game Over! You lasted " + $scope.test + " seconds!");
				$scope.oxygenLevel = 0;
				$scope.batteryLevel = 0;
				$scope.shieldLevel = 0;
				$scope.stop();
			}
			else if ($scope.batteryLevel == -1) {
				alert("You let your ship's battery level reach zero powering down your entire ship. Game Over! You lasted " + $scope.test + " seconds!");
				$scope.oxygenLevel = 0;
				$scope.heatLevel = 0;
				$scope.shieldLevel = 0;
				$scope.stop();
			}

			$scope.countdown();   
		}, 1000);
	};

	var stopped;
	$scope.stop = function(){
		$timeout.cancel(stopped);
		$timeout.cancel(myTimeout);
	};


}]);