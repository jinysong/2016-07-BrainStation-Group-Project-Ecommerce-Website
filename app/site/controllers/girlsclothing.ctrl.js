(function(){
	angular
		.module('shopApp')
		.controller('GirlsClothingCtrl', GirlsClothingCtrl)


	function GirlsClothingCtrl($scope,productSrv,$state){
		var girlsclothingVm = this;

		girlsclothingVm.products = productSrv.products;
		girlsclothingVm.addToCart = productSrv.addToCart;
		girlsclothingVm.search = productSrv.searchTerm; // This is taking the info from the empty character string 

		console.log(girlsclothingVm.products)

		girlsclothingVm.cart = function () {
			$state.go('cart');
		}
		girlsclothingVm.shop = function () {
			$state.go('shop');
		}
		girlsclothingVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}
		girlsclothingVm.allpage = function (){
			console.log('i did a thing');
			productSrv.searchTerm = girlsclothingVm.search; // save shopVm.search to a service
			$state.go('allproducts');
		}
		girlsclothingVm.allpage = function (){
			console.log('i did a thing');
			productSrv.searchTerm = girlsclothingVm.search; // save shopVm.search to a service
			$state.go('allproducts');
		}
	}

	


})();