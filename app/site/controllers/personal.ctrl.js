(function () {
	angular
		.module('shopApp')
		.controller('personalCtrl', function ($timeout, $state,productSrv) {
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
				ctype: '',
				card: '1234-1234-1234-1234-1234',
				expiry: '03/02',
				security: '123'
			}

			ctrl.creditCardType = function (x) {
				ctrl.personalInfo.ctype = x;
			}

			ctrl.clicked = function () {
				productSrv.personalInfo = ctrl.personalInfo;
				console.log(ctrl.personalInfo.firstN)
				var a = document.getElementById('info');
				a.className +=' animated fadeOutUp';

				$timeout(function (){
					$state.go('cart.cart-shipping');
				},300)
				
			}
			ctrl.returnHome = function (){
				$state.go('shop');
			}

		})
})();