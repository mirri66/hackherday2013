function onLinkedInLoad() {
    IN.Event.on(IN, "auth", onLinkedInAuth);
}

function onLinkedInAuth() {
     IN.API.Profile("me").fields("industry", "firstName","lastName").result(displayProfiles);
}

function displayProfiles(profiles) {
     member = profiles.values[0];
     document.getElementById("profiles").innerHTML = 
          "<p id=\"" + member.id + "\">Hello " +  member.firstName + " " + member.lastName + " " + member.industry + "</p>";
          console.log(profiles)
}
