(function(){
	angular
		.module('shopApp')
		.controller('GirlsClothingCtrl', GirlsClothingCtrl)

	function GirlsClothingCtrl($scope,productSrv, $state){
		var girlsclothingVm = this;

		girlsclothingVm.products = productSrv.products;

		girlsclothingVm.cart = function(){
		$state.go('cart');
	}
}
	


})();