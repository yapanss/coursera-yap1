(function(){

angular.module('MenuData')
.controller('categoriesController',categoriesController);

categoriesController.$inject=['items'];
function categoriesController(items){
	 // var items = ["RIX","GAZ","YAOURT"];
	var menuCategories = this;
	menuCategories.items = items;
	console.log("Categories are :",menuCategories.items);
}
	
})()