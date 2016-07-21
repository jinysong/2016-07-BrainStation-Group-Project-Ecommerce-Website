(function () {
	angular
		.module('shopApp')
		.controller('invoiceCtrl', function (productSrv, $state) {
			var ctrl = this;
			ctrl.cartItems = JSON.parse(localStorage.getItem('savedCart'));


			ctrl.personalInfo = productSrv.personalInfo
			ctrl.shippingType = productSrv.shippingType;
			ctrl.shippingPrice = productSrv.shippingPrice;

			ctrl.returnHome = function (){
				$state.go('shop');
			}

		})
})();