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
			     $scope.memory = null;
			     $scope.displayValue = 0;
			     $scope.result = 0;  
			}
			
		};
    
		$scope.btnClickedSum = function(btn) {
            if ( btn == '+') {
                $scope.saveInMemory();
			    $scope.result = '';
            }	
		};
    
		$scope.btnClickedSubtract = function(btn) {
            if (btn == '-') {
                $scope.saveInMemory();
			    $scope.result = '';
            }
		};
    
		$scope.btnClickedMultiply = function(btn) {
            if (btn == '*') {
               $scope.saveInMemory();
			   $scope.result = ''; 
            }
		};
    
		$scope.btnClickedDivide = function(btn) {
            if (btn == '/') {
                $scope.saveInMemory();
			    $scope.result = '';
            }
		};
    
		$scope.btnClickedCalculate = function(btn) {
			if ($scope.operation == "+"){
				$scope.result = parseFloat($scope.memory) + parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "-"){
				$scope.result = parseFloat($scope.memory) - parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "*"){
				$scope.result = parseFloat($scope.memory) * parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "/"){
				$scope.result = parseFloat($scope.memory) / parseFloat($scope.displayValue);
			}

			$scope.memory = $scope.result;
		};
	}
);
