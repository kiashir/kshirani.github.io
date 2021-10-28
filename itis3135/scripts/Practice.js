
let total = 0;
function espressoFunc(){
	document.getElementById("order").innerHTML += "$1.95 - Espresso - Delicious Espresso. Wanna try it? <br>";
	total += 1.95;
	document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

function cappuccinoFunc(){
	document.getElementById("order").innerHTML += "$3.45 - Cappuccino - Delicious Cappuccino! <br>";
	total += 3.45;
	document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

function placeOrder(){
	if (document.getElementById("order").innerHTML === ""){
		alert("You didn't say what you want!!!")
	}else{
		document.getElementById("result").innerHTML = "Your Order Was Placed! Order Number:" + Math.floor(Math.random() * (999 - 1 + 1) + 1);
	}
	
}

function clearOrder(){
	document.getElementById("order").innerHTML = "";
	document.getElementById("total").innerHTML = "";
	document.getElementById("result").innerHTML = "";
}

function contact(){
	alert("You can call: 888-222-333 or email: tuxedo_cat@gmail.com to contact us! ");
}
