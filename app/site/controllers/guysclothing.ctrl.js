(function(){
	angular
		.module('shopApp')
		.controller('GuysClothingCtrl', GuysClothingCtrl)

	function GuysClothingCtrl($scope,productSrv,$state,shopSrv,ngToast){
		var guysclothingVm = this;

		guysclothingVm.products = productSrv.products;
		guysclothingVm.addToCart = productSrv.addToCart;
		guysclothingVm.cartCount = productSrv.cartCount;
		guysclothingVm.search = productSrv.searchTerm;
		guysclothingVm.about = shopSrv.about;
		guysclothingVm.login = shopSrv.login;
		guysclothingVm.cart = shopSrv.cart;
		guysclothingVm.gearpage = shopSrv.gearpage;
		guysclothingVm.menpage = shopSrv.menpage;
		guysclothingVm.womenpage = shopSrv.womenpage;
		guysclothingVm.shop = shopSrv.shop;

		guysclothingVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}
		guysclothingVm.allpage = function (){
		productSrv.searchTerm = guysclothingVm.search; // save shopVm.search to a service
		$state.go('allproducts');
		}
	}



})();