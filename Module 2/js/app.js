(function () {

var shoppingList = [{name:'cookies', quantity: 3 },
					{name:'rice', quantity: 5},
					{name: 'sugar', quantity: 1 },
					{name:'milk', quantity: 10 },
					{name:'water', quantity: 5},
					{name: 'bread', quantity: 3},
					{name:'biscuit', quantity: 13 },
					{name:'farine', quantity: 5},
					{name: 'pate', quantity: 1}];

console.log(shoppingList);


angular.module('achat',[])
.controller('buyController', buyController)
.controller('boughtController',boughtController)
.service('checkingService',checkingService);

buyController.$inject = ['checkingService'];
boughtController.$inject = ['checkingService'];

function buyController(checkingService){
	this.buyList = checkingService.buyList;
	this.removeItem = function(itemIndex){
		checkingService.removeItem(itemIndex);
	}
}

function boughtController(checkingService){
	this.boughtList = checkingService.boughtList;
}

function checkingService(){
	var service = this;
    service.buyList = shoppingList;
    service.boughtList = [];
    service.removeItem=function($index){
    	var item = service.buyList[$index];
    	service.buyList.splice($index,1);
    	console.log(item);
    	service.boughtList.push(item);
    	
    };
}

})();