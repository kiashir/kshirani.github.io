function info(){
    //alert("Hello");
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML += "Name: " + document.getElementById("name").value + "<br>";
    document.getElementById("result").innerHTML += "Email: " + document.getElementById("email").value + "<br>" ;
    document.getElementById("result").innerHTML += "Phone Number: " + document.getElementById("phone").value + "<br>" ;
    document.getElementById("result").innerHTML += "U.S State: " + document.getElementById("state").value + "<br>" ;
    document.getElementById("selector").innerHTML += "<button type='submit' onclick='submit()'>Looks good, submit my info</button>" + "<br>" ;



    var elmnts = document.getElementById("email").elements;
var div = document.getElementById("dispPicks");

for (var x = 0; x < elmnts.length; x++) {
    if (elmnts[x].type == "radio" && elmnts[x].checked == true) {
        div.innerHTML += elmnts[x].value;
    }
}
    document.getElementById("result").innerHTML += "Design: " + document.getElementById("design-").value + "<br>" ;
    document.getElementById("result").innerHTML += "prefer: " + document.getElementById("email").value + "<br>" ;
    document.getElementById("result").innerHTML += "================================================================================================ <br>"

}

function submit(){
    document.getElementById("result").innerHTML = "Thank You, Your info was submitted.";
}