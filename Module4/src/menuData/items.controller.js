(function(){

angular.module('MenuData')
.controller('itemsController',itemsController);

itemsController.$inject=["item"];
function itemsController(item){

	var menuItems = this;
	menuItems.item = item;
}
	
})()