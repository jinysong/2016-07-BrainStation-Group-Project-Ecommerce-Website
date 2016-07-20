(function(){
	angular
		.module('shopApp')
		.controller('GirlsClothingCtrl', GirlsClothingCtrl)


	function GirlsClothingCtrl($scope,productSrv,$state){
		var girlsclothingVm = this;

		girlsclothingVm.products = productSrv.products;

		console.log(girlsclothingVm.products)

		girlsclothingVm.cart = function () {
			$state.go('cart');
		}
		girlsclothingVm.shop = function () {
			$state.go('shop');
		}
		girlsclothingVm.goToDetails = function () {
			$state.go('productdetails'+id);
		}		
	}

	


})();