
function fireSafety(){
    $.ajax({
        type: "get",
        url: "fire-safety.json",
        beforeSend: function() {
            $("#tips").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#tips").html("");
//Reference: murach's JavaScript and jQuery 3rd edition - page 351
            $.each(data, function(){
                $.each(this, function(key, value){
                  $("#tips").append(
                   
                     "<h3>" + value.title+ "</h3>" +
                     
                     "<p>" + value.text+ "</p>"
                  )
              })  
            })

        }
    });
}