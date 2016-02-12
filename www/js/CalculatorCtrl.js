angular.module("calculator", [])
    
.controller("CalculatorCtrl", function CalculatorCtrl($scope) {
		$scope.displayValue = '';
		$scope.memory = null;
		$scope.result = '';
		$scope.operation = '';

		$scope.saveInMemory = function(btn) {
			if (btn == '') {
				$scope.saveInMemory = $scope.memory;
			}
		};
		
		$scope.btnClickedClear = function(btn) {
			if (btn == 'C') {
			     $scope.result = '';  
			}
		};
    
		$scope.btnClickedCalculate = function(btn) {
			if ($scope.operation == '='){
				$scope.result = eval($scope.result);
			}
			else if ($scope.operation == "-"){
				$scope.result =  $scope.result - $scope.saveInMemory;
			}
			else if ($scope.operation == "*"){
				$scope.result =  $scope.result * $scope.saveInMemory;
			}
			else if ($scope.operation == "/"){
				$scope.result =  $scope.result / $scope.saveInMemory;
			}
      else{
        $scope.result += btn;
      }
		};
	}
);
