(function(){
	angular
		.module('shopApp')
		.controller('ShopCtrl',ShopCtrl) // where the html is connected

	function ShopCtrl($scope,productSrv, $state){
		var shopVm = this;

		//TODO #3 Capture resolved products for view
		shopVm.products = productSrv.products;
		console.log(shopVm.products)



		// watch for any changes to model data
		// $scope.$watch(function(){
	 //    	return productSrv.products;
		// }, function (newValue) {
		//     shopVm.products = productSrv.products;
		// });

		shopVm.login = function () {
			$state.go('auth');
		}

		shopVm.cart = function () {
			$state.go('cart.cart-products');
		}

		shopVm.addToCart = function (item) {
			productSrv.cartItems.push(item)
			console.log(productSrv.cartItems)
		}

		shopVm.gearpage = function (){
			$state.go('gear');
		}

		shopVm.menpage = function (){
			$state.go('guys-clothing');
		}

		shopVm.womenpage = function (){
			$state.go('girls-clothing');
		}

		shopVm.allpage = function (){
			console.log('i did a thing');
			productSrv.searchTerm = shopVm.search; // save shopVm.search to a service
			$state.go('allproducts');
		}
	}

})();


