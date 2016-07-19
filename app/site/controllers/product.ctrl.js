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
		// productVm.onLoad();
		
		// productVm.product = {};
		productVm.products = productSrv.products;
		productVm.product_update_btn = 'Update Product';
		productVm.product_delete_btn = 'Remove Product';
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
				.then(function(){
					console.log(newProduct)
					alert("You added " + newProduct.Name + " to the inventory");
					console.log(productVm.products);
					$state.go('admin.dash');
				})
				
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
			alert("You edited " + updateProduct.name);
			productVm.product_update_btn = "You edit was successful";
			$state.go('admin.dash');
		}

		function deleteProduct(){
			//TODO #2
			//remove product, pass to product service
			//update text in button
			var productIdEdit = location.hash.split('/')[3];

			productSrv.deleteProduct(productIdEdit)
			.then(function(){
				alert("Your delete was successful");
				$state.go('admin.dash');
			})			
			productSrv.updateProductList();
		}

	}

})();




