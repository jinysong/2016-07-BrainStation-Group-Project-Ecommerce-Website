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
		productVm.selected = productVm.categories[0];
		
		if($stateParams.productId != undefined){
			productSrv.getProduct($stateParams.productId)
			.then(function(res){
				console.log(res);
				productVm.product = res.data.product;

				// TODO #2 set category based on edit form based on 
				// product category
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


			productVm.newProduct = { 
				Name: productVm.name,
				Image: productVm.image,
				Description: productVm.description,
				Category: productVm.category, 
				Price: productVm.price, 
				Quantity: productVm.quantity
			}
				
				productSrv.addProduct();
				console.log(productVm.newProduct)
				alert("You added " + productVm.newProduct.Name + " to the inventory");
				console.log(productVm.products);
				// Pushing the new product into the empty productVm.product array above. 

		//function returnToProducts (){
			$state.go('admin.dash');
		//}

		}
			// Linking the newly added product to the product page 
		
		function updateProduct(){
			//TODO #2
			
			//create product object, pass to product service
			productVm.product = {
				"name": productVm.edit_name,
				"image": productVm.edit_image,
				"description": productVm.edit_description,
				"category": productVm.selected,
				"price": productVm.price,
				"quantity": productVm.quantity
			}

			productSrv.updateProduct();

			//Update text in button
			productVm.product_update_btn = " Your product has been updated!";

		}

		function deleteProduct(){
			//TODO #2
			//remove product, pass to product service
			//update text in button

			productSrv.deleteProduct();
			}
		
	}

})();




