(function(){

	angular
		.module('shopApp')
		.service('productSrv',ProductService);

	function ProductService($state,api){
		var self = this;
		//public variables
		self.products = [];

		self.cartItems = [];
		
		self.shippingType;
		self.shippingPrice;
		self.personalInfo;
		self.totalNoTax;
		self.totalWithTax;

		//public functions
		self.getProduct = getProduct;
		self.getProducts = getProducts;
		self.addProduct = addProduct;
		self.updateProduct = updateProduct;
		self.updateProductList = updateProductList;
		self.removeProduct = removeProduct;
		self.deleteProduct = deleteProduct;
		self.addToCart = addToCart;
		self.addToCartDetail = addToCartDetail;

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
			return api.request('/products',product,'POST')
			.then(function(res){
				console.log(res);
				if(res.status === 200){
					//product was added successfully
					console.log(res);
					self.products.push(res.data.product);
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
			return api.request('/products/'+productId,{},'DEL')
			.then(function(res){
				console.log(res);
				if(res.status === 200){
					//product was deleted successfully
					self.removeProduct(productId);
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
			console.log(self.products)
		}

		function removeProduct(productId){
			for(var i=0;i < self.products.length;i++){
				if(self.products[i].id == productId){
					delete self.products[i];
				}
			}
		}

		removeProduct(2)

		function addToCart(item) {
			// check if item is already in cart
			for (i = 0; i < self.cartItems.length; i++) {
				if (self.cartItems[i].product.id === item.id) {
					self.cartItems[i].quantity++;
					return;
				}
			}

			var newCart = {
				product: item,
				quantity:  1
			}

			self.cartItems.push(newCart)
			var saveCart = JSON.stringify(self.cartItems)
			localStorage.setItem('savedCart',saveCart)
		}

		function addToCartDetail(item,quantity) {
			// check if item is already in cart
			for (i = 0; i < self.cartItems.length; i++) {
				if (self.cartItems[i].product.id === item.id) {
					self.cartItems[i].quantity++;
					return;
				}
			}
			var newCart = {
				product: item,
				quantity:  quantity
			}			
			self.cartItems.push(newCart)

			var saveCart = JSON.stringify(self.cartItems)
			localStorage.setItem('savedCart',saveCart)


		}
		self.toAdmin = orderToAdmin();
		function orderToAdmin() {
			// creating A client Order
			var newOrder = {
				cart: JSON.parse(localStorage.getItem('savedCart')),
				client: JSON.parse(localStorage.getItem('savedPersonalInfo')),
				shipping: self.shippingType
			}
			for (var i = 0,i<ctrl.cartItems.length; i++) {
				
					updateProduct()
			}
		}			

			// if ( !(localStorage.getItem('savedOrders'))) {
			// 	newOrder = JSON.stringify(newOrder)
			// 	localStorage.setItem('savedOrders', [newOrder])
			// } else {
			// 	var tempOrders = JSON.parse(localStorage.getItem('savedOrders'))
			// 	tempOrders.push(newOrder)
			// 	JSON.stringify(tempOrders)
			// 	localStorage.setItem('savedOrders', tempOrders)
			// }
		// check localStorage for previous saved orders 
		// if none, make new array in local storage 
		// 	if exists, just push new order into existing array
		//
		
	}
})();