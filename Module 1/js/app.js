(function(){

angular.module('lunchCheck',[])
.controller('lunchCheckController', lunchCheckController);
function lunchCheckController($scope){
	$scope.choix = "";
	$scope.long = 0;
	$scope.longueur = function(){
		var n = $scope.choix;
		var reg = new RegExp("[,]+","g");
		var tableau = n.split(reg);
		
		$scope.tabl = tableau;
		$scope.long = tableau.length;
		if ($scope.tabl==""){
			$scope.message = "Please enter data first";
		}
		else{
			if($scope.long<=3){
			$scope.message="Enjoy !";
		}
		else{
			$scope.message="Too much !";
		}
		}
	};
	}
})();




// document.getElementById('mon').textContent = "MERCI";