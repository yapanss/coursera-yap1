(function(){

angular.module('MenuData')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject=["$http"];
function MenuDataService($http){
	
	var service=this;
	service.getAllCategories = function(){
		return $http({url:"https://davids-restaurant.herokuapp.com/categories.json"})
		.then(function(response){
			var categories = response.data;
			console.log("The categories are :", categories);
			return categories;
		});
	};
	service.getItemsForCategory = function(categoryShortName){
		return $http({url:"https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName})
		.then(function(response){
			var items = response.data.menu_items;
			console.log("The items are :", items);
			return items;
		})
	} 
};

})()