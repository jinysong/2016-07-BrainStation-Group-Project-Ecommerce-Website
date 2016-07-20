(function () {
	angular
		.module('shopApp')
		.controller('productsCtrl', function ($state,productSrv, $timeout) {
			var ctrl = this;

			ctrl.cartItems = productSrv.cartItems;

			ctrl.addItem = function ($index) {
				productSrv.cartItems[$index].quantity++;
			};
			ctrl.removeItem = function ($index) {
				if (productSrv.cartItems[$index].quantity !==0) productSrv.cartItems[$index].quantity--;
			}

			ctrl.totalNoTax = function () {
				var result = 0;
				for (var i=0; i<ctrl.cartItems.length; i++) {
					result += (parseInt(ctrl.cartItems[i].quantity) * parseInt(ctrl.cartItems[i].price));
				}
				return result;
			}
			ctrl.totalWithTax = function () {
				return (ctrl.totalNoTax() * 1.13);
			}

			ctrl.clicked = function () {
				if (ctrl.totalNoTax()) {
					var a = document.getElementById('basket');
					a.className +=' animated fadeOutUp';

					$timeout(function() {
						$state.go("cart.cart-personal");
					}, 300);
				} else {
					ctrl.err=true;
				}
			}

			ctrl.error = false;

		})	
})();