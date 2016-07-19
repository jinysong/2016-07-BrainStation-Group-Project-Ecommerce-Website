(function () {
	angular
		.module('shopApp')
		.controller('cartCtrl', function (productSrv) {
			var ctrl = this;
			ctrl.cartItems =productSrv.cartItems;
			
			ctrl.shippingMethod = [
			{type:'First Class Mail', price: '22', description: 'Any item 13 ounces or less, it is a fast, inexpensive shipping method. All gretting cards and stamped mail go via First Class. It can be a package, an envelope, or a box. Cost is calculated by the ounce and most can be tracked. Note: The USPS requires any envelope MUST be more than 3/4 inch thick in at least one spot to be allowed to have electronic tracking'},
			{type:'Express Mail', price: '15', description: 'Overnight Mail. Flat Rate Envelopes are also available.   It is very expensive and not frequently used, but is good to offer around the Holidays or for items like party dresses, where a buyer may need it very quickly. '},
			{type:'Parcel Post', price: '10', description: 'Less Expensive, takes a bit longer, you cannot use any of the Priority Mail boxes for this method. Any item can be shipped via Parcel Post.'},
			{type:'Priority Mail', price: '5', description: 'It will get there.'},
			{type:'Economy Shipping', price: '0', description: 'It might or might not get there'}
			]

			ctrl.shippingSelect;




		})
})();