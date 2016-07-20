(function(){
	angular
		.module('shopApp')
		.controller('GuysClothingCtrl', GuysClothingCtrl)

	function GuysClothingCtrl($scope,productSrv,$state){
		var guysclothingVm = this;

		guysclothingVm.products = productSrv.products;
	
		guysclothingVm.cart = function () {
			$state.go('cart');
		}
		guysclothingVm.shop = function () {
			$state.go('shop');
		}
	}



})();