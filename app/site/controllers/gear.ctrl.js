(function(){
	angular
		.module('shopApp')
		.controller('GearCtrl', GearCtrl)

	function GearCtrl($scope,productSrv,$state){
		var gearVm = this;

		gearVm.products = productSrv.products;

		console.log(gearVm.products)

		gearVm.cart = function () {
			$state.go('cart');
		}
		gearVm.shop = function () {
			$state.go('shop');
		}		
	}

})();