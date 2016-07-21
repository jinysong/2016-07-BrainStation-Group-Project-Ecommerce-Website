(function () {
	angular
		.module('shopApp')
		.controller('productsCtrl', function ($state,productSrv, $timeout) {
			var ctrl = this;
			ctrl.cartItems = JSON.parse(localStorage.getItem('savedCart'));
			 
			console.log(ctrl.cartItems)

			ctrl.addItem = function ($index) {
				ctrl.cartItems[$index].quantity++;
			};
			ctrl.removeItem = function ($index) {
				if (ctrl.cartItems[$index].quantity !==0) ctrl.cartItems[$index].quantity--;
			}

			ctrl.totalNoTax = function () {
				var result = 0;
				for (var i=0; i<ctrl.cartItems.length; i++) {
					result += (parseInt(ctrl.cartItems[i].quantity) * parseInt(ctrl.cartItems[i].product.price));
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

			ctrl.returnHome = function (){
				$state.go('shop');
			}
			ctrl.delete_from_cart = function(index) {
				console.log(index)
				console.log(productSrv.cartItems[index])
				ctrl.cartItems.splice(index,1);
				var saveCart = JSON.stringify(ctrl.cartItems)
				localStorage.setItem('savedCart',saveCart);
			}
		})	
})();