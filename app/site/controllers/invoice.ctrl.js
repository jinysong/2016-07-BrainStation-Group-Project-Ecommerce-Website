(function () {
	angular
		.module('shopApp')
		.controller('invoiceCtrl', function (productSrv, $state) {
			var ctrl = this;

			ctrl.cartItems = productSrv.cartItems;

			ctrl.returnHome = function (){
				$state.go('shop');
			}

		})
})();