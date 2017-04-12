(function(){
"use strict";
angular.module('public')
.controller('signupController', signupController);

signupController.$inject = ['signupService'];

function signupController(signupService){
	var ctrl = this;
	ctrl.firstName = "";
	ctrl.lastName = "";
	ctrl.email = "";
	ctrl.phone = "";
	ctrl.favorite = "";
	
	ctrl.check = function(submitData){
		ctrl.affiche = false;
		ctrl.errorMessage = "";
		console.log("submitData :",submitData.firstName);
		var promise = signupService.checkFavorite(ctrl.favorite);
		promise.then(function(success){
			ctrl.affiche = true;
			signupService.affiche = true;
			if (ctrl.favorite.length >2){
				ctrl.favoriteShort = ctrl.favorite.slice(0,2)
			}
			else {
				ctrl.favoriteShort = ctrl.favorite.slice(0,1)
			};


			signupService.infos = {
				first_name : ctrl.firstName,
				last_name : ctrl.lastName,
				email : ctrl.email,
				phone : ctrl.phone,
				favorite : ctrl.favorite,
				favoriteShort : ctrl.favoriteShort,
				rep : signupService.rep
			};
			// signupService.infos = signupService.getItem(ctrl.phone);
			console.log("signupService.infos = ",signupService.infos);
		},function(error){
			ctrl.errorMessage = "No such menu number exists";
		});

	}				
}

})()