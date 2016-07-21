(function(){
	angular
		.module('shopApp')
		.controller('GearCtrl', GearCtrl)

	function GearCtrl($scope,productSrv,$state){
		var gearVm = this;

		gearVm.products = productSrv.products;
		gearVm.addToCart = productSrv.addToCart;
		gearVm.search = productSrv.SearchTerm;

		console.log(gearVm.products)

		gearVm.cart = function () {
			$state.go('cart');
		}
		gearVm.shop = function () {
			$state.go('shop');
		}		
		gearVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}	

		gearVm.allpage = function (){
			productSrv.searchTerm = gearVm.search;
			$state.go('allproducts');
		}
	}

})();