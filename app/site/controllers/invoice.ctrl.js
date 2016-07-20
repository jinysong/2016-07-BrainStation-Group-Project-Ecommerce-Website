(function () {
	angular
		.module('shopApp')
		.controller('invoiceCtrl', function (productSrv) {
			var ctrl = this;

			ctrl.cartItems = productSrv.cartItems;

		})
})();