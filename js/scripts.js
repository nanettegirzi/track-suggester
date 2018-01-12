$(document).ready(function() {
  $("#form").submit(function(event) {
    var language = $("select#language").val();
    var size = $("select#size").val();
    var application = $("select#application").val();
    var android = $("select#android").val();
    var excited = $("select#excited").val();


    if (language === "C#/.Net" && size === "Large Company" && android === "No") {
      $("#csharp").show();
      $("#form").hide();
    } else  if (language === "Ruby/Rails" && size === "Small Startup" && android === "Yes") {
      $("#ruby").show();
      $("#form").hide();
    }  else  if (language === "PHP/Drupal" && application === "Backend" && android === "No") {
        $("#php").show();
        $("#form").hide();
    } else {
      $("#java").show();
      $("#form").hide();
    }
     event.preventDefault();
    });
  });
