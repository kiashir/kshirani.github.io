/*$(document).ready(function() {
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
                     "Project Title: " + value.title + "<br>" +
                     "Project Owner (client): " + value.owner + "<br>" + 
                     "Project Purpose: "+ value.purpose + "<br><br>"
                  )
              })  
            })

        }
    });
});*/

function projectInfo(){
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
                     "<span style='color:yellow; font-size:larger;'> Project Title: </span>" + value.title + "<br>" +
                     "<span style='color:yellow; font-size:larger;'> Project Owner (client): </span>" + value.owner + "<br>" + 
                     "<span style='color:yellow; font-size:larger;'> Project Purpose: </span>"+ value.purpose + "<br><br>"
                  )
              })  
            })

        }
    });
}