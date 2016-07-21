(function () {
	angular
		.module('shopApp')
		.controller('invoiceCtrl', function (productSrv, $state) {
			var ctrl = this;
			ctrl.cartItems = JSON.parse(localStorage.getItem('savedCart'));
			ctrl.orderId = JSON.parse(localStorage.getItem('savedOrderId'))
			console.log('cartItems.length:' +ctrl.cartItems.length)
			
			ctrl.totalPrice = function() {
				var total=0;
				for (var i=0; i<ctrl.cartItems.length; i++) {
					total +=ctrl.cartItems[i].product.price * ctrl.cartItems[i].quantity;
				}
				return total;
			}
			ctrl.dateNow = function() {
				var a = new Date();
				var b = a.getMonth()+1 + "/" + a.getDate() + "/" + a.getFullYear();
				return b
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