(function(){

angular.module('MenuData')
.component('itemsComponent',{
	templateUrl:'src/menudata/templates/items.component.html',
	bindings:{
		item:'<'
	}
})

})()