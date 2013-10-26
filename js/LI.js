function onLinkedInLoad() {
    IN.Event.on(IN, "auth", onLinkedInAuth);
}

function onLinkedInAuth() {
     IN.API.Profile("me")
     .fields("industry", "firstName","lastName","positions","headline","location","summary","specialties","email-address","interests","skills","educations")
     .result(displayProfiles);
}

function displayProfiles(profiles) {
     member = profiles.values[0];
     document.getElementById("profiles").innerHTML = 
          "<ul>"+
          "<li id=\"" + member.id + "\">Name: " +  member.firstName + " " + member.lastName + "</li>" +
          "<li> Industry: " + member.industry + "</li>" +
          "</ul>";
          console.log(profiles)
}
