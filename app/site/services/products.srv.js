(function(){

	angular
		.module('shopApp')
		.service('productSrv',ProductService);

	function ProductService($state,api){
		var self = this;
		//public variables
		self.products = [];
// <<<<<<< HEAD
		


// =======
// 		// console.log(self.products);
// >>>>>>> JinySong/master

		//public functions
		self.getProduct = getProduct;
		self.getProducts = getProducts;
		self.addProduct = addProduct;
		self.updateProduct = updateProduct;
		self.updateProductList = updateProductList;
		self.removeProduct = removeProduct;
		self.deleteProduct = deleteProduct;

		function getProducts(){
			return api.request('/products',{},'GET')
			.then(function(res){
				//success callback
				console.log(res);
				self.products = res.data.products;
				return self.products;
			},function(res){
				//error callback
				console.log(res);
				return;
			})
		}

		function addProduct(product){
			api.request('/products',product,'POST')
			.then(function(res){
				console.log(res);
				if(res.status === 200){
					//product was added successfully
					console.log(res);
					self.products.push(res.data.product);
					console.log(self.products)
					// state.go('admin.dash');
				}
			})
		}

		function updateProduct(product,productId){
			api.request('/products/'+productId,product,'PUT')
			.then(function(res){
				console.log(res);
				if(res.status === 200){
					//product was updated successfully
					self.updateProductList(product,productId);
					
				}
			})
		}

		function deleteProduct(productId){
			api.request('/products/'+productId,{},'DEL')
			.then(function(res){
				console.log(res);
				if(res.status === 200){
					//product was deleted successfully
					self.removeProduct(productId);
					state.go('admin.dash');
					
				}
			})
		}

		function getProduct(productId){
			return api.request('/products/'+productId,{},'GET');
		}

		function updateProductList(product,productId){
			for(var i=0;i < self.products.length;i++){
				if(self.products[i].id == productId){
					self.products[i].name = product.name;
					self.products[i].image = product.image;
					self.products[i].description = product.description;
					self.products[i].category = product.category;
					self.products[i].price = product.price;
					self.products[i].quantity = product.quantity;
				}
			}
		}

		function removeProduct(productId){
			for(var i=0;i < self.products.length;i++){
				if(self.products[i].id == productId){
					delete self.products[i];
				}
			}
		}

		removeProduct(2)

		// addFakeProducts()

		// function addFakeProducts() {
		// 	var pdt1 = {
		// 		productId:'1',
		// 		name:'Surfboard',
		// 		description:'you use it to surf',
		// 		category:'surf',
		// 		price:'34',
		// 		quantity:'2',
		// 		status: true,
		// 		image: "../assets/img/img-duffle.png"
		// 	}
		// 	var pdt2 = {
		// 		productId:'2',
		// 		name:'Boardshorts',
		// 		description: "don't go nakeed!!",
		// 		category:'surf',
		// 		price:'12',
		// 		quantity:'4',
		// 		status:true,
		// 		image: "../assets/img/img-duffle.png"
		// 	}

		// 	addProduct(pdt1);
		// 	addProduct(pdt2);
			
		// }



	}
})();