(function(){
	'use strict';

	angular
		.module('shopApp',['ui.router']);

	angular
		.module('shopApp')
		.config(function($stateProvider, $httpProvider,$urlRouterProvider){
			
			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('shop',{
				url:'/',
				templateUrl:'site/partials/shop-main.html',
				controller:'ShopCtrl as ctrl',
				//TODO #3 resolve products before main page load
				resolve:{
					products:function(productSrv){
						return productSrv.getProducts();
					}
				}
			})
			.state('cart', {
				url: '/cart',
				templateUrl: 'site/partials/shop-cart.html',
				controller: 'cartCtrl as ctrl',
				// resolve: {
				// 	cart: function(prductSrv){
				// 		return productSrc.getCartProducts();
				// 	}
				// }
			})

			.state('guys-clothing',{
				url: '/guys-clothing',
				templateUrl: 'site/partials/shop-guysclothing.html',
				controller: 'GuysClothingCtrl as ctrl',
				resolve:{
					clothing:function(productSrv){
						return productSrv.getProducts();
					}
				}
			})

			.state('girls-clothing',{
				url: '/girls-clothing',
				templateUrl: 'site/partials/shop-girlsclothing.html',
				controller: 'GirlsClothingCtrl as ctrl',
				resolve:{
					clothing:function(productSrv){
						return productSrv.getProducts();
					}
				}
			})

			.state('gear',{
				url: '/gear',
				templateUrl: 'site/partials/shop-gear.html',
				controller: 'GearCtrl as ctrl',
				resolve:{
					clothing:function(productSrv){
						return productSrv.getProducts();
					}
				}
			})

			.state('admin',{
				url:'/admin',
				templateUrl:'site/partials/admin.html',
				controller:'AdminCtrl as ctrl',
				//TODO #2 Resolve Products before admin page load
				resolve:{
					products:function(productSrv){
						return productSrv.getProducts();
					}
				}
			})

			.state('admin.dash',{
				url:'/dashboard',
				templateUrl:'site/partials/admin-dash.html',
				controller:'AdminCtrl as ctrl',
			})

			.state('admin.add_product',{
				url:'/add_product',
				controller:'ProductCtrl as ctrl',
				templateUrl:'site/partials/admin-add-product.html'
			})

			.state('admin.edit_product',{
				url:'/edit_product/:productId',
				controller:'ProductCtrl as ctrl',
				templateUrl:'site/partials/admin-edit-product.html',
			})

			.state('auth',{
				url:'/auth',
				templateUrl:'site/partials/auth-main.html',
				controller:'AuthCtrl as ctrl',
			});

			$httpProvider.interceptors.push(function(){
		       return {
		           request: function(config) {
		               return config;
		           },
		           response: function(response) {
		               var auth_token = response.headers('authentication');
		               if(localStorage.authToken == undefined && auth_token != null){
		               		localStorage.authToken = auth_token;
		               }
		               return response;
		           }
		       }
		   });
		});
})();

