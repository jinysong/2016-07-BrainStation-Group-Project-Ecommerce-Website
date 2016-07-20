(function(){
	angular
		.module('shopApp')
		.controller('ProductdetailsCtrl', ProductdetailsCtrl)

	function ProductdetailsCtrl($scope,productSrv){
		var productdetailsVm = this;

		productdetailsVm.products = productSrv.products;
	}

})();