(function(){

angular.module('MenuData')
.component('itemsComponent',{
	template:'<ul><li class="detail" ng-repeat="item in $ctrl.item">{{item.name}}</li></ul>',
	bindings:{
		item:'<'
	}
})



})()