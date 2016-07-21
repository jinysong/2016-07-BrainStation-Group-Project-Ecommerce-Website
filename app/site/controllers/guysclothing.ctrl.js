(function(){
	angular
		.module('shopApp')
		.controller('GuysClothingCtrl', GuysClothingCtrl)

	function GuysClothingCtrl($scope,productSrv,$state){
		var guysclothingVm = this;

		guysclothingVm.products = productSrv.products;
		guysclothingVm.addToCart = productSrv.addToCart;
		guysclothingVm.search = productSrv.searchTerm;

		console.log(guysclothingVm.products)
	
		guysclothingVm.cart = function () {
			$state.go('cart');
		}
		guysclothingVm.shop = function () {
			$state.go('shop');
		}
		guysclothingVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}
		guysclothingVm.allpage = function (){
		console.log('i did a thing');
		productSrv.searchTerm = guysclothingVm.search; // save shopVm.search to a service
		$state.go('allproducts');
		}
	}



})();