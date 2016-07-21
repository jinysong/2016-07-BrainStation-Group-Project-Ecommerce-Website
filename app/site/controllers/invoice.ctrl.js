(function () {
	angular
		.module('shopApp')
		.controller('invoiceCtrl', function (productSrv, $state) {
			var ctrl = this;
			ctrl.personalInfo = productSrv.personalInfo
			ctrl.cartItems = productSrv.cartItems;
			ctrl.shippingType = productSrv.shippingType;
			ctrl.shippingPrice = productSrv.shippingPrice;

			ctrl.returnHome = function (){
				$state.go('shop');
			}

		})
})();