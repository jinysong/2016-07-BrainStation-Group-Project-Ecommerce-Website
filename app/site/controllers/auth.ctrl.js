(function(){
	angular
		.module('shopApp')
		.controller('AuthCtrl',AuthCtrl);

	function AuthCtrl($state,api){
		var authVm = this;

		authVm.password;
		authVm.email;
		authVm.auth_btn = 'Continue';
		authVm.auth_btn2 = 'Back To Shop';

		if(localStorage.authToken){
			$state.go('admin');
		}

		//public functions
		authVm.login = login;
		authVm.backToShop = backToShop;

		function login(){

			var payload = {
				email:authVm.email,
				password:authVm.password
			}
			authVm.auth_btn = "Authorizing";
			//make api call
			api.request('/users/login',payload,'POST')
			.then(function(res){
				console.log(res);
				//success callback
				//success code
				if(res.status == 200){
					authVm.auth_btn = "Success";
					//user exists
					if(res.data.user.length == 0){
						authVm.auth_btn = 'Invalid Password';	
					}
					else{
						$state.go('admin.dash');
					}
				}
				
			},function(res){
				//error callback
				console.log(res);
				authVm.auth_btn = "Error";
			})
		}
		function backToShop(){
			$state.go('shop');
		}
	}

})();



