var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image
	var a= document.getElementById(espresso);
	a[0].onclick= order;
	// for click event add item to order and update total
	var order =function () {

		document.getElementById(order).innerHTML += "Delicious espresso. Wanna try it?";
	}
	// display order and total

	
		
}; // end onload