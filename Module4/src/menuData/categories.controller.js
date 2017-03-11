(function(){

angular.module('MenuData')
.controller('categoriesController',categoriesController);

categoriesController.$inject=['items'];
function categoriesController(items){
	var menuCategories = this;
	menuCategories.items = items;
	console.log("Categories are :",menuCategories.items);
}
	
})()