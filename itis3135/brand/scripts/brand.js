
function info(){

    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML += "-Name: " + document.getElementById("name").value + "<br>";
    document.getElementById("result").innerHTML += "-Email: " + document.getElementById("email").value + "<br>" ;
    document.getElementById("result").innerHTML += "-Phone Number: " + document.getElementById("phone").value + "<br>" ;
    document.getElementById("result").innerHTML += "-U.S State: " + document.getElementById("state").value + "<br>";
    
    var ele = document.getElementsByName('design');
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
        document.getElementById("result").innerHTML += "<br>"+"-Design Preference: "+ ele[i].value;
        }
    }

        var ele2 = document.getElementsByName('preference');
        for(i = 0; i < ele2.length; i++) {
            if(ele2[i].checked){
            document.getElementById("result").innerHTML += "<br>"+"-Contact Preference: "+ ele2[i].value;
            }
        }

        var ele3 = document.getElementsByName('hear');    
        for(i = 0; i < ele3.length; i++) {
            if(ele3[i].checked){
            document.getElementById("result").innerHTML += "<br> " +"-How Did You Hear About Our Company: "+ ele3[i].value;
            }
            
        }
       

        if (document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("phone").value == "" ){
        
            alert("Make sure you fill out all mandatory fields (Name, Email and Phone Number).");
            
        }else{
            
            document.getElementById("result").innerHTML += "<br><br>"+ "<span style='color: darkgreen; font-size:larger;'>Thank you </span>" + document.getElementById("name").value + "<span style='color: darkgreen; font-size:larger;'>, your info was submitted!</span>";
            
    
        }

}

function feedBack(){

    if(document.getElementById("feedtext").value[0] != " "){
        document.getElementById("feed").innerHTML = "Your feedback/comment " + "was submitted." +"<br><br>" +"Thank you for your feedback." ;
    }else{
        alert("Don't forget to add feedback!\nAdditional Tip: Dont start your comment/feedback with any SPACE.");
    }
  
}
