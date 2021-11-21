

function toobin(){
    $.ajax({
        type: "get",
        url: "toobin.json",
        
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("main").html("");
//Reference: murach's JavaScript and jQuery 3rd edition - page 351
            $.each(data, function(){
                $.each(this, function(key, value){
                  $("main").append(
                    $("<h1>" + value.title + "</h1>"
                    + "<h2>" + value.month + "</h2>"
                    + "<h3>" + value.speaker + "</h3>"
                    + "<img src=" + value.image + " alt= toobin_picture>"
                    + "<p>" + value.text + "</p>"
                  ));
              })  
            })
   
        }
    });
}


function sorkin(){
    $.ajax({
        type: "get",
        url: "sorkin.json",
    
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("main").html("");
//Reference: murach's JavaScript and jQuery 3rd edition - page 351
            $.each(data, function(){
                $.each(this, function(key, value){
                  $("main").append(
                    $("<h1>" + value.title + "</h1>"
                    + "<h2>" + value.month + "</h2>"
                    + "<h3>" + value.speaker + "</h3>"
                    + "<img src=" + value.image + " alt= sorkin_picture>"
                    + "<p>" + value.text + "</p>"
                  ));
              })  
            })
   
        }
    });
}

function chua(){
    $.ajax({
        type: "get",
        url: "chua.json",
    
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("main").html("");
//Reference: murach's JavaScript and jQuery 3rd edition - page 351
            $.each(data, function(){
                $.each(this, function(key, value){
                  $("main").append(
                    $("<h1>" + value.title + "</h1>"
                    + "<h2>" + value.month + "</h2>"
                    + "<h3>" + value.speaker + "</h3>"
                    + "<img src=" + value.image + " alt= chua_picture>"
                    + "<p>" + value.text + "</p>"
                  ));
              })  
            })
   
        }
    });
}

function sampson(){
    $.ajax({
        type: "get",
        url: "sampson.json",
    
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("main").html("");
//Reference: murach's JavaScript and jQuery 3rd edition - page 351
            $.each(data, function(){
                $.each(this, function(key, value){
                  $("main").append(
                    $("<h1>" + value.title + "</h1>"
                    + "<h2>" + value.month + "</h2>"
                    + "<h3>" + value.speaker + "</h3>"
                    + "<img src=" + value.image + " alt= sampson_picture>"
                    + "<p>" + value.text + "</p>"
                  ));
              })  
            })
   
        }
    });
}