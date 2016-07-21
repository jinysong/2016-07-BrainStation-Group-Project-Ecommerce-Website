(function(){

	angular
		.module('shopApp')
		.service('adminSrv',AdminService);

	function AdminService($state,api,productSrv){
		var self = this;
		self.orders = [];
		self.orders.push(productSrv.toAdmin)
		console.log(self.orders)
	}
})();