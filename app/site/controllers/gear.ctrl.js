(function(){
	angular
		.module('shopApp')
		.controller('GearCtrl', GearCtrl)

	function GearCtrl($scope,productSrv,$state,shopSrv){
		var gearVm = this;

		gearVm.products = productSrv.products;
		gearVm.addToCart = productSrv.addToCart;
		gearVm.search = productSrv.SearchTerm;
		gearVm.cartCount = productSrv.cartCount;
		gearVm.about = shopSrv.about;
		gearVm.login = shopSrv.login;
		gearVm.cart = shopSrv.cart;
		gearVm.gearpage = shopSrv.gearpage;
		gearVm.menpage = shopSrv.menpage;
		gearVm.womenpage = shopSrv.womenpage;
		gearVm.shop = shopSrv.shop;
	
		gearVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}	

		gearVm.allpage = function (){
			productSrv.searchTerm = gearVm.search;
			$state.go('allproducts');
		}
	}

})();