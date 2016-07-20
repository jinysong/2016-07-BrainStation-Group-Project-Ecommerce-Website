(function(){
	angular
		.module('shopApp')
		.controller('ProductdetailsCtrl', ProductdetailsCtrl)

	function ProductdetailsCtrl($stateParams,productSrv,productdetails){
		var productdetailsVm = this;
		productdetailsVm.product= productdetails;
		
		// productSrv.getProduct($stateParams.productId)
		// .then(function(res){
		// 	console.log(res);
		// 	if(res.status === 200){
		// 		//product was added successfully
		// 		console.log(res);
		// 		productdetailsVm.product = res.data.product;
		// 	}
		// });
		

 
	}

})();