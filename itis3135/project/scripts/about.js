$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "about-project.json",
        beforeSend: function() {
            $("#about").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#about").html("");
//Reference: murach's JavaScript and jQuery 3rd edition - page 351
            $.each(data, function(){
                $.each(this, function(key, value){
                  $("#about").append(
                     "<h3>" + value.project-naam + "</h3>" +
                     value.project-owner + "<br>" + 
                     value.purpose + "<br><br>"
                  )
              })  
            })

        }
    });
});