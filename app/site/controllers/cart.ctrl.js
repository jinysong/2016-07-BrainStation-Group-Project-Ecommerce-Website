(function () {
	angular
		.module('shopApp')
		.controller('cartCtrl', function (productSrv) {
			var ctrl = this;
			ctrl.cartItems =productSrv.cartItems;
			



		})
})();