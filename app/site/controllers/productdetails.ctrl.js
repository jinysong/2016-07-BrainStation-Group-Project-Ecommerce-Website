(function(){
	angular
		.module('shopApp')
		.controller('ProductdetailsCtrl', ProductdetailsCtrl)

	function ProductdetailsCtrl($stateParams,productSrv,$state){
		var productdetailsVm = this;
		productdetailsVm.product = productSrv.getProduct($stateParams.productId)
		
		.then(function(res){
			console.log(res);
			if(res.status === 200){
				//product was added successfully
				console.log(res);
				productdetailsVm.product = res.data.product;
				console.log(productdetailsVm.product)
			}
		});
	
		productdetailsVm.changePage = changePage;

		function changePage() {
			if(productdetailsVm.product.category == 'gear'){
				$state.go('gear')
			} else if (productdetailsVm.product.category == 'guys-clothing'){
					$state.go('guys-clothing')
			} else if (productdetailsVm.product.category == 'girls-clothing'){
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