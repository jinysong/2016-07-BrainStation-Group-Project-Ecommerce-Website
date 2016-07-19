(function(){
	angular
		.module('shopApp')
		.controller('GuysClothingCtrl', GuysClothingCtrl)

	function GuysClothingCtrl($scope,productSrv){
		var guysclothingVm = this;

		guysclothingVm.products = productSrv.products;
	}

})();