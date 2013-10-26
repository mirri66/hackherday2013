<%-- 
    Document   : second
    Created on : Oct 25, 2013, 11:25:00 PM
    Author     : Antara
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>
<head>
<title>LinkedIn JavaScript API Hello World</title>

<!-- 1. Include the LinkedIn JavaScript API and define a onLoad callback function -->
<script type="text/javascript" src="http://platform.linkedin.com/in.js">
  api_key: h9ejkaswcns9
  onLoad: onLinkedInLoad
  authorize: true
</script>

<script type="text/javascript">
  // 2. Runs when the JavaScript framework is loaded
  function onLinkedInLoad() {
    IN.Event.on(IN, "auth", onLinkedInAuth);
  }

  // 2. Runs when the viewer has authenticated
  function onLinkedInAuth() {
    IN.API.Profile("me").result(displayProfiles);
  }

  // 2. Runs when the Profile() API call returns successfully
  function displayProfiles(profiles) {
    member = profiles.values[0];
    request.setAttribute("firstName",member.firstName);
    document.getElementById("profiles").innerHTML =
      "<p id="" + member.id + "\">Hello " +  member.firstName + " " + member.lastName + "</p>";
    return member;
    } 
</script>
</head>
<body>
    <form action='profiles.jsp' method="POST" id="form1">
    <jsp:useBean id="publicProfiles" class="com.inQuest.beans.publicProfiles" scope="session"></jsp:useBean>        
<!-- 3. Displays a button to let the viewer authenticate -->
<script type="IN/Login"></script>

<!-- 4. Placeholder for the greeting -->

<div id="profiles"></div>
<input type="hidden" name="firstName" value="heeeeeellllo">
<input name="Submit" type="submit" value="ok">
    </form>
</body>
</html>
