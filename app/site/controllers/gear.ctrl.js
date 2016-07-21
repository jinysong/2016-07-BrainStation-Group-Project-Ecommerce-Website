(function(){
	angular
		.module('shopApp')
		.controller('GearCtrl', GearCtrl)

	function GearCtrl($scope,productSrv,$state){
		var gearVm = this;

		gearVm.products = productSrv.products;
		gearVm.addToCart = productSrv.addToCart;

		console.log(gearVm.products)

		gearVm.cart = function () {
			$state.go('cart');
		}
		gearVm.shop = function () {
			$state.go('shop');
		}		
		gearVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}	
	}

})();