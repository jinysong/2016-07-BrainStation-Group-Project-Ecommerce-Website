(function(){
	angular
		.module('shopApp')
		.controller('AboutUsCtrl',AboutUsCtrl)

	function AboutUsCtrl($scope,productSrv, $state, shopSrv){
		var aboutVm = this;

		aboutVm.cartCount = productSrv.cartCount;
		aboutVm.login = shopSrv.login;
		aboutVm.cart = shopSrv.cart;
		aboutVm.gearpage = shopSrv.gearpage;
		aboutVm.menpage = shopSrv.menpage;
		aboutVm.womenpage = shopSrv.womenpage;
		aboutVm.shop = shopSrv.shop;
	}
})();