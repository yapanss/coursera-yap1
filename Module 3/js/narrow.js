(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

// ----------------Definition du Controller--------------------------------------------
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var ctr = this;
	ctr.searchTerm='';
	
	ctr.find = function(){
		var promise = MenuSearchService.getMatchedMenuItems(ctr.searchTerm);
		promise.then(function success(response){
					ctr.title1 = "Name";
					ctr.title2 = "Short Name";
					ctr.title3 = "description";
					ctr.found=MenuSearchService.foundItems;
					ctr.notFound=MenuSearchService.notFound;
					ctr.message="NOTHING FOUND";
				})
				.catch(function(response){
					ctr.notFound = true;
					ctr.message = "NOTHING FOUND !!!";
					console.log("SORRY, AN ERROR OCCURED ...");
					console.log("ctr.notFound :",ctr.notFound);
				});
};

ctr.onRemove = function(itemIndex){
	console.log("itemRetire :", ctr.found[itemIndex]);
	 // ctr.found = ctr.found.splice(itemRetire, 1);
	 	ctr.found.splice(itemIndex,1);

	};		

}
	
// ---------------------Definition du Service-------------------------------
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service = this;
	 
    service.getMatchedMenuItems = function(searchTerm){
	return $http({url:"https://davids-restaurant.herokuapp.com/menu_items.json"})
		.then(function(response){
			// if (searchTerm =="") {
				// service.foundItems=[];
			// }
			
			if(searchTerm == ""){
				service.foundItems = [];
				// service.notFound=true;
			}					
			else{
				service.foundItems = [];
				var result = response.data.menu_items;
				var lowerSearchTerm = searchTerm.toLowerCase();
				for (var i = 0; i < result.length; i++) {
					if(result[i].description.indexOf(lowerSearchTerm) !== -1){
						service.foundItems.push(result[i]);
					}
				
				}	
				
			};
			
			if (service.foundItems.length == 0) {
					service.notFound=true;
				}
			else{
					service.notFound=false;
				}

		});
				
};		// console.log('ERROR, ERROR');
	
}
// -----------------------Directive foundItemsDirective------------------------
function FoundItemsDirective(){
	var ddo={
		templateUrl:'foundItems.html',
		scope:{
			found:'<',
			title1:'<',
			title2:'<',
			title3:'<',
			notFound:'<',
			// list:'=myList',
			onRemove:'&'
		},
		controller:FoundItemsDirectiveController,
		controllerAs:'list',
		bindToController:true
	};
	return ddo;
}

function FoundItemsDirectiveController(){
	var list=this;

}

})();

