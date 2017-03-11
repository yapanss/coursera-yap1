(function(){

angular.module('MenuData')
.component('categoriesComponent',{
	template:'<ul><li ng-repeat="item in $ctrl.items"><a ui-sref="items({itemId:item.short_name})"> {{item.name}}</a></li></ul>',
	bindings:{
		items:'<'
	}
});



})();