(function(){
	angular
		.module('shopApp')
		.controller('ProductdetailsCtrl', ProductdetailsCtrl)

	function ProductdetailsCtrl($stateParams,productSrv,$state,shopSrv){
		var productdetailsVm = this;
		productdetailsVm.selected = 1;
		productdetailsVm.product = productSrv.getProduct($stateParams.productId)

		.then(function(res){
			// console.log(res);
			if(res.status === 200){
				//product was added successfully
				// console.log(res);
				productdetailsVm.product = res.data.product;

			for(var i=1; i <= res.data.product.quantity; i++){
				productdetailsVm.Quantity.push(i);
				
				}
				
			}
		});
		productdetailsVm.Quantity = [];
		productdetailsVm.changePage = changePage;
		productdetailsVm.addToCart = productSrv.addToCart;
		productdetailsVm.cartCount = productSrv.cartCount;
		productdetailsVm.about = shopSrv.about;
		productdetailsVm.login = shopSrv.login;
		productdetailsVm.cart = shopSrv.cart;
		productdetailsVm.gearpage = shopSrv.gearpage;
		productdetailsVm.menpage = shopSrv.menpage;
		productdetailsVm.womenpage = shopSrv.womenpage;
		productdetailsVm.shop = shopSrv.shop;

		function changePage() {
			if(productdetailsVm.product.category == 'gear'){
				$state.go('gear')
			} else if (productdetailsVm.product.category == 'guys_clothing'){
					$state.go('guys-clothing')
			} else if (productdetailsVm.product.category == 'girls_clothing'){
					$state.go('girls-clothing')
			}
		}

		
			


		productdetailsVm.cart = function () {
			$state.go('cart');
		}
		productdetailsVm.shop = function () {
			$state.go('shop');
		}	
	}

})();


