<%-- 
    Document   : profiles
    Created on : Oct 26, 2013, 1:38:10 AM
    Author     : Antara
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body><%String firstName=request.getParameter("firstName");%>
            <jsp:useBean id="publicProfiles" class="com.inQuest.beans.publicProfiles" scope="page">      
                <jsp:setProperty name="publicProfiles" property="firstName" value="<%= firstName %>"/>
            </jsp:useBean>
        <h1>Hello World!</h1>
    </body>
</html>
