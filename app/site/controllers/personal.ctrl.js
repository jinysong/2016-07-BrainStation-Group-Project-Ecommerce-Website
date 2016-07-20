(function () {
	angular
		.module('shopApp')
		.controller('personalCtrl', function ($state,productSrv) {
			var ctrl = this;

			ctrl.cartItems = productSrv.cartItems;

			ctrl.personalInfo = {
				firstN : 'Jiny',
				lastN : 'Soong',
				email : 'asdfasdf@lakfd.com',
				phone : '324-234-1235',
				address : 'fasdfasdfa as',
				address2 : 'asdf',
				city : 'tronto',
				state : 'on',
				country : 'canada',
				postal : 'M1t 3p5',
			}

			ctrl.clicked = function () {
				// animated fadeInUp
				$state.go('cart.cart-shipping');
			}

		})
})();