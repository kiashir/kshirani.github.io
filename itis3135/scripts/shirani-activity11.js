//<!-- jQuery call to the accordion() method. -->
//Reference #1: https://jqueryui.com/accordion/#collapsible
//Reference #2: https://stackoverflow.com/questions/5077785/jquery-accordion-plugin-active-problem

$(document).ready(function() {
   // $("#tabs").tabs();
    $( "#tabs" ).accordion({
        collapsible: true, 
        active: false,
        heightStyle: "content" 

      });



});