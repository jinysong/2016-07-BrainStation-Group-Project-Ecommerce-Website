(function(){
	angular
		.module('shopApp')
		.controller('GearCtrl', GearCtrl)

	function GearCtrl($scope,productSrv){
		var gearVm = this;

		gearVm.products = productSrv.products;
	}

})();