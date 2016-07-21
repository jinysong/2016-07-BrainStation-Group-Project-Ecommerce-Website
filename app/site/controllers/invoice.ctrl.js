(function () {
	angular
		.module('shopApp')
		.controller('invoiceCtrl', function (productSrv, $state) {
			var ctrl = this;
			ctrl.cartItems = JSON.parse(localStorage.getItem('savedCart'));
			console.log('cartItems.length:' +ctrl.cartItems.length)
			
			ctrl.totalPrice = function() {
				var total=0;
				for (var i=0; i<ctrl.cartItems.length; i++) {
					total +=ctrl.cartItems[i].product.price * ctrl.cartItems[i].quantity;
				}
				return total;
			}

			ctrl.totalNoTax = productSrv.totalNoTax;
			ctrl.totalWithTax = productSrv.totalWithTax;

			ctrl.personalInfo = productSrv.personalInfo
			ctrl.shippingType = productSrv.shippingType;
			ctrl.shippingPrice = productSrv.shippingPrice;

			ctrl.returnHome = function (){
				$state.go('shop');
			}

		})
})();