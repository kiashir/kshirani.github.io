function questionOne(){
    
    var ele = document.getElementsByName("q1");
              
   
        if(!ele[0].checked && !ele[1].checked){
        document.getElementById("check1").innerHTML = "You didn't answer";
        }else if (ele[0].checked){
            document.getElementById("check1").innerHTML = "Correct";
            }else{
                document.getElementById("check1").innerHTML = "Not correct";
            }
               
}

function questionTwo(){
    
    var ele = document.getElementsByName("q2");
              
        if(!ele[0].checked && !ele[1].checked && !ele[2].checked && !ele[3].checked){
        document.getElementById("check2").innerHTML = "You didn't answer";
        }else if (ele[1].checked){
            document.getElementById("check2").innerHTML = "Correct";
            }else{
                document.getElementById("check2").innerHTML = "Not correct";
            }
       
}

function questionThree(){
    
    var ele = document.getElementsByName("q3");
              
        if(!ele[0].checked && !ele[1].checked && !ele[2].checked && !ele[3].checked){
        document.getElementById("check3").innerHTML = "You didn't answer";
        }else if (ele[1].checked){
            document.getElementById("check3").innerHTML = "Correct";
            }else{
                document.getElementById("check3").innerHTML = "Not correct";
            }
               
}

function questionFour(){
    
    var ele = document.getElementsByName("q4");
              
        if(!ele[0].checked && !ele[1].checked && !ele[2].checked && !ele[3].checked){
        document.getElementById("check4").innerHTML = "You didn't answer";
        }else if (ele[2].checked){
            document.getElementById("check4").innerHTML = "Correct";
            }else{
                document.getElementById("check4").innerHTML = "Not correct";
            }
       
}

function questionFive(){
    
    var ele = document.getElementsByName("q5");
              
        if(!ele[0].checked && !ele[1].checked && !ele[2].checked && !ele[3].checked){
        document.getElementById("check5").innerHTML = "You didn't answer";
        }else if (ele[1].checked){
            document.getElementById("check5").innerHTML = "Correct";
            }else{
                document.getElementById("check5").innerHTML = "Not correct";
            }
       
}

function questionSix(){
    
    var ele = document.getElementsByName("q6");
              
        if(!ele[0].checked && !ele[1].checked){
        document.getElementById("check6").innerHTML = "You didn't answer";
        }else if (ele[0].checked){
            document.getElementById("check6").innerHTML = "Correct";
            }else{
                document.getElementById("check6").innerHTML = "Not correct";
            }
       
}

function questionSeven(){
    
    var ele = document.getElementsByName("q7");
              
        if(!ele[0].checked && !ele[1].checked){
        document.getElementById("check7").innerHTML = "You didn't answer";
        }else if (ele[1].checked){
            document.getElementById("check7").innerHTML = "Correct";
            }else{
                document.getElementById("check7").innerHTML = "Not correct";
            }
       
}

function questionEight(){
    
    var ele = document.getElementsByName("q8");
              
        if(!ele[0].checked && !ele[1].checked && !ele[2].checked && !ele[3].checked){
        document.getElementById("check8").innerHTML = "You didn't answer";
        }else if (ele[2].checked){
            document.getElementById("check8").innerHTML = "Correct";
            }else{
                document.getElementById("check8").innerHTML = "Not correct";
            }
       
}

function questionNine(){
    
    var ele = document.getElementsByName("q9");
              
        if(!ele[0].checked && !ele[1].checked){
        document.getElementById("check9").innerHTML = "You didn't answer";
        }else if (ele[0].checked){
            document.getElementById("check9").innerHTML = "Correct";
            }else{
                document.getElementById("check9").innerHTML = "Not correct";
            }
       
}

function questionTen(){
    
    var ele = document.getElementsByName("q10");
              
        if(!ele[0].checked && !ele[1].checked){
        document.getElementById("check10").innerHTML = "You didn't answer";
        }else if (ele[1].checked){
            document.getElementById("check10").innerHTML = "Correct";
            }else{
                document.getElementById("check10").innerHTML = "Not correct";
            }
       
}