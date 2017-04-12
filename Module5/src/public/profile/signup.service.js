(function(){
"use strict";
angular.module('public')
.service('signupService', signupService);


signupService.$inject = ['$http'];

function signupService($http){
	var service = this;
	service.infos = {
		first_name : "",
		last_name : "",
		email : "",
		phone : "",
		favorite : ""
	};
	service.checkFavorite = function(favorite){
		return $http({url:"https://yapanss-course.herokuapp.com/menu_items/"+favorite+".json"})
		.then(function(response){
			service.rep = response.data;

		})
	}
	
}


})()