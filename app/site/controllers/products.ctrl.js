(function () {
	angular
		.module('shopApp')
		.controller('productsCtrl', function ($state,productSrv) {
			var ctrl = this;

			ctrl.cartItems = productSrv.cartItems;

			ctrl.clicked = function () {
				// animated fadeInUp
				$state.go("cart.cart-personal");
			}

		})
})();