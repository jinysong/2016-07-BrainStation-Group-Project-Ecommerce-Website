(function(){

	angular
		.module('shopApp')
		.service('shopSrv',ShopService);

	function ShopService($state,api){
		var self = this;

		self.login = function () {
			$state.go('auth');
		}
		self.about = function() {
			$state.go('about')
		}
		self.cart = function (){
			$state.go('cart.cart-products');
		}

		self.gearpage = function (){
			$state.go('gear');
		}

		self.menpage = function (){
			$state.go('guys-clothing');
		}
		self.womenpage = function (){
			$state.go('girls-clothing');
		}
		self.shop = function () {
			$state.go('shop');
		}
	}
})();