(function(){
"use strict";

angular.module('public')
.component('signupComponent', {
	templateUrl:'src/public/profile/signup.component.html',
	bindings:{
		items : '<'
		// first_name:'<',
		// last_name:'<',
		// email:'<',
		// phone:'<',
		// favorite:'<'
	}
	});
})()