(function(){
	angular
		.module('shopApp')
		.controller('AllCtrl', AllCtrl)

	function AllCtrl($scope,productSrv,$state, $stateParams,shopSrv){
		var allVm = this;

		allVm.products = productSrv.products;
		allVm.addToCart = productSrv.addToCart;
		allVm.cartCount = productSrv.cartCount;
		allVm.about = shopSrv.about;
		allVm.login = shopSrv.login;
		allVm.cart = shopSrv.cart;
		allVm.gearpage = shopSrv.gearpage;
		allVm.menpage = shopSrv.menpage;
		allVm.womenpage = shopSrv.womenpage;
		allVm.shop = shopSrv.shop;
		allVm.search = productSrv.searchTerm; // get search term saved in service (from shop.ctrl.js)
	
		allVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}	

		// allVm.allpage = function (){
		// 	console.log('i did a thing');
		// 	$state.go('allproducts');
		// }
	}

})();