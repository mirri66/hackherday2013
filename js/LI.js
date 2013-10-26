function onLinkedInLoad() {
  $('#test').css("display","none");
      
    IN.Event.on(IN, "auth", onLinkedInAuth);
}

function onLinkedInAuth() {
     IN.API.Profile("me")
     .fields("industry", "firstName","lastName","positions","headline","location","summary","specialties","email-address","interests","skills","educations")
     .result(displayProfiles);

     /* hide intro text*/
     $('#intro').hide();

     /* display results */
     displayresults();
}

function displayProfiles(profiles) {
     member = profiles.values[0];
    
     document.getElementById("profiles").innerHTML = 
          "<p id=\"" + member.id + "\">Welcome, " +  member.firstName + ".</p>"
     }

/* display results */
function displayresults() {

      /* hide first */
      $('#profiles').css("display","none");
      $('#test').css("display","none");
      
      /* construct chart */
      $('#profiles').show('fast');
      $('#test').show('slow');




      //$('#results').fadeIn(200);
}