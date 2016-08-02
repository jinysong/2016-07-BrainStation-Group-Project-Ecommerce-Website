(function(){
	angular
		.module('shopApp')
		.controller('GirlsClothingCtrl', GirlsClothingCtrl)


	function GirlsClothingCtrl($scope,productSrv,$state,shopSrv){
		var girlsclothingVm = this;

		girlsclothingVm.products = productSrv.products;
		girlsclothingVm.addToCart = productSrv.addToCart;
		girlsclothingVm.cartCount = productSrv.cartCount;
		girlsclothingVm.search = productSrv.searchTerm; // This is taking the info from the empty character string 
		girlsclothingVm.about = shopSrv.about;
		girlsclothingVm.login = shopSrv.login;
		girlsclothingVm.cart = shopSrv.cart;
		girlsclothingVm.gearpage = shopSrv.gearpage;
		girlsclothingVm.menpage = shopSrv.menpage;
		girlsclothingVm.womenpage = shopSrv.womenpage;
		girlsclothingVm.shop = shopSrv.shop;

		girlsclothingVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}
		girlsclothingVm.allpage = function (){
			productSrv.searchTerm = girlsclothingVm.search; // save shopVm.search to a service
			$state.go('allproducts');
		}
	}

	


})();