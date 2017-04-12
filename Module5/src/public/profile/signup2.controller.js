(function(){
"use strict";
angular.module('public')
.controller('signupController2', signupController2);

signupController2.$inject = ['items'];
function signupController2(items){
	var ctrl = this;
	ctrl.items = items;
	// ctrl.affiche = function(){
		// console.log("ITEM = ", ctrl.items.first_name);
	
	// ctrl.favorite = "";
	// ctrl.favoriteName = "";
	// ctrl.firstName2 = "charles";
};


})()