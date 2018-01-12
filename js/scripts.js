$(document).ready(function() {
  $("#form").submit(function(event) {
    var language = $("select#language").val();
    var size = $("select#size").val();
    var application = $("select#application").val();
    var android = $("select#android").val();
    var language = $("select#android").val();

    if (language === "C#/.Net" && size === "large company "&& android === "no") {
      $("#csharp").show();
      $("#form").hide();
    } else {
       $("#Java").show();
       $("form").hide();
     }

   




     event.preventDefault();


    });
  });
