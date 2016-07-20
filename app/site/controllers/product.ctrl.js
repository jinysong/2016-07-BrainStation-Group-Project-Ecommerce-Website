(function(){

	angular
	.module('shopApp')
	.controller('ProductCtrl',ProductCtrl);

	function ProductCtrl($stateParams,api,productSrv, $state){
		var productVm = this;
		console.log("hi");
		productVm.categories = [
			{label:'Shirts',value:'shirts'},
			{label:'Pants',value:'pants'},
			{label:'Shoes',value:'shoes'},
			{label:'Outerwear',value:'outerwear'},
			{label:'Accessories',value:'accessories'},
		];
		
		// productVm.product = {};
		productVm.products = productSrv.products;
		productVm.product_update_btn = 'Update Product';
		productVm.product_delete_btn = 'Remove Product';
		productVm.showTextEdit = "You have successfully edited your product!";
		productVm.showTextDelete = "You have successfully deleted your product!";
		productVm.showTextAdd = "You have successfully added your product!";
		productVm.showEdit = false;
		productVm.showAdd = false;
		productVm.showDelete = false;
		var productIdEdit = location.hash.split('/')[3]
		
		if($stateParams.productId != undefined){
			productSrv.getProduct($stateParams.productId)
			.then(function(res){
				console.log(res);
				// Enters the data into the inputfields
				productVm.product = res.data.product;
				console.log(productVm.product)
				productVm.name = productVm.product.name
				productVm.image = productVm.product.image
				productVm.description = productVm.product.description
				productVm.category = productVm.product.category
				productVm.price = productVm.product.price
				productVm.quantity = productVm.product.quantity

				for(var index in productVm.categories){
					if(productVm.product.category == productVm.categories[index].value){
						productVm.set_category = productVm.categories[index].value;
					}
				}
				
			})
		
		}
		//public functions
		productVm.addProduct = addProduct;
		productVm.updateProduct = updateProduct;
		productVm.deleteProduct = deleteProduct;

		function addProduct(){
			//TODO #2
			//create product object, pass to product service
			//Update text in button


			var newProduct = { 
				name: productVm.name,
				image: productVm.image,
				description: productVm.description,
				category: productVm.category,
				price: productVm.price,
				quantity: productVm.quantity
			}
				productSrv.addProduct(newProduct)
				productVm.showAdd = true;
				setTimeout(function() {
					productVm.showAdd = false
					console.log(newProduct)
					console.log(productVm.products);
					$state.go('admin.dash')
					.then(function() {
						$state.reload();
					})
				}, 2000)
				
				
				// Pushing the new product into the empty productVm.product array above. 

		//function returnToProducts (){

		//}

		}
			// Linking the newly added product to the product page 
		
		function updateProduct(){
			//TODO #2
			
			//create product object, pass to product service
			var updateProduct = {
				name: productVm.name,
				image: productVm.image,
				description: productVm.description,
				category: productVm.category, 
				price: productVm.price, 
				quantity: productVm.quantity
			}
			

			console.log(productVm.name)
			console.log(productVm.image)
			var productIdEdit = location.hash.split('/')[3];
			console.log(productIdEdit)
			productSrv.updateProduct(updateProduct, productIdEdit);
			console.log(updateProduct)
			// productSrv.updateProductList();
			//Update text in button
			productVm.showEdit = true;
			console.log(productVm.showEdit)
			setTimeout(function() {
				productVm.showEdit = false;
				console.log(productVm.showEdit);
				productVm.product_update_btn = "You edit was successful";
				$state.go('admin.dash')
				.then(function() {
					$state.reload();
				})
			}, 2000)
			

		}

		function deleteProduct(){
			//TODO #2
			//remove product, pass to product service
			//update text in button
			var productIdEdit = location.hash.split('/')[3];

			productSrv.deleteProduct(productIdEdit)
			productVm.showDelete = true;
			setTimeout(function() {
				productVm.showDelete = false;
				$state.go('admin.dash')
				.then(function() {
					$state.reload();
				})			
			}, 2000)
			
			productSrv.updateProductList();
		}

	}

})();




