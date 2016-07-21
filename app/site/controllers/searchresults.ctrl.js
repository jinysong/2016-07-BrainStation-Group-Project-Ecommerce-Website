(function(){
	angular
		.module('shopApp')
		.controller('searchCtrl', searchCtrl)

	function searchCtrl($scope,productSrv,$state, $stateParams){
		var searchVm = this;

		searchVm.products = productSrv.products;
		searchVm.addToCart = productSrv.addToCart;
		searchVm.searchKey = searchKey;

		console.log(searchVm.products)

		searchVm.cart = function () {
			$state.go('cart');
		}
		searchVm.shop = function () {
			$state.go('shop');
		}		
		searchVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}	

		searchVm.searchKey = function (productId){
		console.log('PLEASE WORK');
		$state.go('allproducts' + productId);
		}
	}

})();