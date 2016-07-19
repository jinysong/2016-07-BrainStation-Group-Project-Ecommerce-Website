(function(){

	angular
	.module('shopApp')
	.controller('ProductCtrl',ProductCtrl);

	function ProductCtrl($stateParams,api,productSrv){
		var productVm = this;
		console.log("hi");
		productVm.categories = [
			{label:'Shirts',value:'shirts'},
			{label:'Pants',value:'pants'},
			{label:'Shoes',value:'shoes'},
			{label:'Outerwear',value:'outerwear'},
			{label:'Accessories',value:'accessories'},
		];
		productVm.product = {};
		productVm.product_update_btn = 'Update Product';
		productVm.product_delete_btn = 'Remove Product';
		
		if($stateParams.productId != undefined){
			productSrv.getProduct($stateParams.productId)
			.then(function(res){
				console.log(res);
				productVm.product = res.data.product;
				//TODO #2 set category based on edit form based on 
				//product category
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

			productVm.newProduct = [{ 
				Name: 'Name', Image: 'Image', Description: 'Description', Category: 'Cate', Price: 'Price', Quantity: 'Quant'}
			]
			productVm.product.push(productVm.newProduct);
			console.log(newProduct)
			alert("You added" + {{productVm.newProduct.Name}} + "to the inventory");
			// Pushing the new product into the empty productVm.product array above. 
		}

		function updateProduct(){
			//TODO #2
			//create product object, pass to product service
			//Update text in button
		}

		function deleteProduct(){
			//TODO #2
			//remove product, pass to product service
			//update text in button
		}
	}

})();




