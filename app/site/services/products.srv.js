(function(){

	angular
		.module('shopApp')
		.service('productSrv',ProductService);

	function ProductService($state,api,ngToast){
		var self = this;
		//public variables
		self.products = [];

		self.cartItems = [];
		
		self.shippingType;

		self.shippingPrice;
		self.personalInfo;

		self.totalNoTax;
		self.totalWithTax;

		self.searchTerm = '';

		self.searchTerm = '';

		//public functions
		self.getProduct = getProduct;
		self.getProducts = getProducts;
		self.addProduct = addProduct;
		self.updateProduct = updateProduct;
		self.updateProductList = updateProductList;
		self.removeProduct = removeProduct;
		self.deleteProduct = deleteProduct;
		self.addToCart = addToCart;

		function getProducts(){
			return api.request('/products',{},'GET')
			.then(function(res){

				//success callback
				self.products = res.data.products;
				return self.products;
			},function(res){
				//error callback
				return;
			})
		}

		function addProduct(product){
			return api.request('/products',product,'POST')
			.then(function(res){
				if(res.status === 200){
					//product was added successfully
					self.products.push(res.data.product);
				}
			})
		}

		function updateProduct(product,productId){
			api.request('/products/'+productId,product,'PUT')
			.then(function(res){
				if(res.status === 200){
					//product was updated successfully
					self.updateProductList(product,productId);
					
				}
			})
		}

		function deleteProduct(productId){
			return api.request('/products/'+productId,{},'DEL')
			.then(function(res){
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

		}

		function removeProduct(productId){
			for(var i=0;i < self.products.length;i++){
				if(self.products[i].id == productId){
					delete self.products[i];
				}
			}
		}

		removeProduct(2)

		function addToCart(item,quantity) {
			// check if item is already in cart
			for (i = 0; i < self.cartItems.length; i++) {
				if (self.cartItems[i].product.id === item.id) {
					self.cartItems[i].quantity++;
					ngToast.create({
						className: 'warning',
  						content: '<div class="pop-up-window">Yayy, you have successfully added an item to your cart!</div>'
					});
					var saveCart = JSON.stringify(self.cartItems)
					localStorage.setItem('savedCart',saveCart)
					return;
				}
			}

			var newCart = {
				product: item,
				quantity:  quantity
			}
			self.cartItems.push(newCart)
			ngToast.create({
  						className: 'warning',
  						content: '<div class="pop-up-window">Yayy, you have successfully added an item to your cart!</div>'
			});
			var saveCart = JSON.stringify(self.cartItems)
			localStorage.setItem('savedCart',saveCart)
		}

		self.cartCount = function() {
			var getCartItems = JSON.parse(localStorage.getItem('savedCart'));
			return getCartItems.length
		}

		self.toAdmin2 = function () {

			//extracting cart info:
			var start = JSON.parse(localStorage.getItem('savedCart'));
				//remove items from inventory
				for (var i=0; i<start.length; i++) {
					start[i].product.quantity -= start[i].quantity;
					self.updateProduct(start[i].product,start[i].product.id)
				}

			var cart = [];
			for (var i=0; i<start.length; i++) {
				cart.push({id: start[0].product.id, name: start[0].product.name});
			};
			var x = '';
			for (var i=0; i<cart.length; i++) {
				x += '  >> Id: ' + cart[i].id + '   Name: ' + cart[i].name + '\n'
			}


			var newOrder1 = {
				id: 0,
				cart: x,
				ship: self.shippingType,
				msg: '',
				status: ''
			}
			var newOrder = Object.assign(self.personalInfo, newOrder1);
			
			if(!JSON.parse(localStorage.getItem('ORDERS'))) {
				newOrder.id = 0;
				var x = [];
				x.push(newOrder);
				localStorage.setItem('ORDERS', JSON.stringify(x))
			} else {
				var x = JSON.parse(localStorage.getItem('ORDERS'));
				x[x.length] = newOrder;
				localStorage.setItem('ORDERS', JSON.stringify(x));
			}

		}


		self.toAdmin = orderToAdmin();
		function orderToAdmin() {
			// creating A client Order
			var newOrder = {
				cart: JSON.parse(localStorage.getItem('savedCart')),
				client: JSON.parse(localStorage.getItem('savedPersonalInfo')),
				shipping: self.shippingType
			}
			// for (var i = 0,i<ctrl.cartItems.length; i++) {
				
			// 		updateProduct()
			// }
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