(function () {
	angular
		.module('shopApp')
		.controller('personalCtrl', function ($timeout, $state,productSrv) {
			var ctrl = this;

			ctrl.cartItems = productSrv.cartItems;

			ctrl.personalInfo = {
				firstN : '',
				lastN : '',
				email : '',
				phone : '',
				address : '',
				address2 : '',
				city : '',
				state : '',
				country : '',
				postal : '',
				ctype: '',
				card: '',
				expiry: '',
				security: ''
			}

			ctrl.creditCardType = function (x) {
				ctrl.personalInfo.ctype = x;
			}

			ctrl.clicked = function () {
				productSrv.personalInfo = ctrl.personalInfo;
				console.log(ctrl.personalInfo.firstN)
				var savePersonalInfo = JSON.stringify(ctrl.personalInfo)
				localStorage.setItem('savedPersonalInfo',savePersonalInfo);
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