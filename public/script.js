// event handler parent for event propagation
const $quantityBtnCntr = $('.buy-form');
// element containing value of current buy count. val() should be 0 at initialization
const $quantityBuyCount = $('.qty-counter');

// event listener
$quantityBtnCntr.click((event) => {
	// check to see if the Qty 
	const target = $(event.target);
	console.log(target.tagName)
	// check if clicked element is a button
	if (event.target.tagName === 'BUTTON') {
		// if button's text value is '+'
		if (target.text() === '+') {
			// check to see if the product quantity is less or equal to the desired quantity 
			if (getNumberInStock() <= $quantityBuyCount.val()) {
				return window.alert(`You cannot buy more than what's available`);
			}
			$quantityBuyCount.val(() => {
				return +$quantityBuyCount.val() + 1;
			});
		} else if (target.text() === '-') { // want to to make the code explicit that's why im writing this
			// check to see if the number is 0 or less
			if ($quantityBuyCount.val() <= 0) {
				return window.alert('You cannot choose a value lower than 0');
			} else {
				$quantityBuyCount.val(() => {
					return +$quantityBuyCount.val() - 1;
				});
			};
		};
	};
});

function getNumberInStock() {
	// the string of the stock ('Quantity: X') 
	const $productQtyString = $('.qty-cntr');
	let qty = $productQtyString.text();
	// replace all non numbers with an empty string
	// getting rid of 'Quantity: ' 
	return parseInt(qty.replace(/^\D+/g, ''));
};