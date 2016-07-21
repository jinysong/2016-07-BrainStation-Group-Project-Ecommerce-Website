(function(){
	angular
		.module('shopApp')
		.controller('ProductdetailsCtrl', ProductdetailsCtrl)

	function ProductdetailsCtrl($stateParams,productSrv,$state){
		var productdetailsVm = this;
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
	
		productdetailsVm.selected = 1;
		productdetailsVm.Quantity = [];
		productdetailsVm.changePage = changePage;
		productdetailsVm.addToCartDetail = productSrv.addToCartDetail;

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