(function(){
	angular
		.module('shopApp')
		.controller('GirlsClothingCtrl', GirlsClothingCtrl)

	function GirlsClothingCtrl($scope,productSrv){
		var girlsclothingVm = this;

		girlsclothingVm.products = productSrv.products;
	}

})();