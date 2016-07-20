(function () {
	angular
		.module('shopApp')
		.controller('cartCtrl', function ($state, productSrv) {
			var ctrl = this;

			ctrl.cartItems =productSrv.cartItems;
			
			$state.go('cart.cart-products')



		})
})();