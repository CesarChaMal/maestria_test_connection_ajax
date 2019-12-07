<%@ page language = "java" contentType = "text/html; charset = ISO-8859-1"
	import="java.io.*"
	import="java.sql.*"
	import="java.util.*"
	import="com.connection.ConnectionDB"
%>
<script src="System.js" type="text/javascript"></script>
<script src="jscript.dom.js" type="text/javascript"></script>
<html>
<head>
	<title>Base de datos y Ajax</title>
</head>
<body>
    <%
    if(request.getParameter("db")!=null){
        ConnectionDB myDbTest = null;
        String RDBMS = request.getParameter("rdbms");
        //out.println(RDBMS);
        String Server = request.getParameter("server");
        //out.println(Server);
        String Port = request.getParameter("port");
        //out.println(Port);
        String DataBase = request.getParameter("db");
        //out.println(DataBase);
        String User = request.getParameter("user");
        //out.println(User);
        String Password = request.getParameter("password");
        //out.println(Password);

        myDbTest = new ConnectionDB(RDBMS, Server, Port, DataBase, User, Password);
        //out.println(myDbTest);
        //myDbTest.displayDbProperties();

        Connection connection = null;
        connection = myDbTest.getConnection();
        //out.println(connection);
        //out.println(myDbTest.getConnectionUrl());

        if(request.getParameter("query")!=null){
            ResultSet res = null;
            Statement stmt = connection.createStatement();

            if(connection!=null){
                String nombre = request.getParameter("nombre");
                String sql = "SELECT * FROM usuario WHERE nombre = '" + nombre +"'";
                res = stmt.executeQuery(sql);

                out.println("<TABLE BORDER=5 ALIGN=CENTER>\n" +
                "<TR BGCOLOR=\"#FFAD00\">\n" +
                "<TH>ID</TH>" +
                "<TH>Nombre</TH>"+
                "<TH>Apellido</TH>");
                while(res.next()){
                   out.println("<TR>" +
                   "<TD>" + res.getString("id")+ "</TD>" +
                   "<TD>" + res.getString("nombre") + "</TD>" +
                   "<TD>" + res.getString("apellido")+ "</TD>"
                   );
                }
                out.println("</TR></TABLE>");
             }
        }else{
            %>
            <script>
                if (typeof request == "undefined"){
                    var request = null;
                    try {
                      request = new XMLHttpRequest();
                      //request.overrideMimeType('text/html');
                      //request.overrideMimeType('text/xml');
                    } catch (trymicrosoft) {
                      try {
                        request = new ActiveXObject("Msxml2.XMLHTTP");
                      } catch (othermicrosoft) {
                        try {
                          request = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (failed) {
                          request = null;
                        }
                      }
                    }

                    if (request == null)
                      alert("Error creating request object!");
                }

                var Index = function(){}

                Index.Ajax = function()
                {
                    var rdbms = "<%=RDBMS%>";
                    //alert(rdbms)
                    var server = "<%=Server%>";
                    //alert(server)
                    var port = "<%=Port%>";
                    //alert(port)
                    var db = "<%=DataBase%>";
                    //alert(db)
                    var user = "<%=User%>";
                    //alert(user)
                    var password = "<%=Password%>";
                    //alert(password)

                    //var url = "http://localhost:8084/Test_Connection_AJAX/";
                    var url = "ResponseAjax.jsp?lenguaje=jsp&ajax=1";
                    url = url + "&rdbms=" + escape(rdbms) + "&server=" + escape(server) + "&port=" + escape(port) + "&db=" + escape(db) + "&user=" + escape(user) + "&password=" + escape(password);
                    url = url + "&dummy=" + new Date().getTime();
                    //alert(url)

                    request.open("POST", url, true);
                    request.onreadystatechange = Index.updatePage;
                    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    var nombre = document.getElementById("nombre").value;
                    var apellido = document.getElementById("apellido").value;
                    //alert(nombre)
                    //alert(apellido)

                    request.send("nombre=" + escape(nombre) + "&apellido=" + escape(apellido));
                }

                Index.updatePage = function()
                {
                    if (request.readyState == 4) {
                        if (request.status == 200) {
                            var data = request.responseText;
                            //alert(data);
                            data = System.Trim(data)
                            //alert(data);

                            var datos = document.getElementById("datos");
                            datos.value = data;

                            //var jsdom = new jscript.dom();
                            //jsdom.execScripts(data);

                        } else {
                            var message = request.getResponseHeader("Status");
                            if ((message.length == null) || (message.length <= 0)) {
                                alert("Error! Request status is " + request.status);
                            } else {
                                alert(message);
                            }
                        }
                    }
                }

                Index.AjaxJSP = function()
                {
                    var url = "http://localhost:8084/Test_Connection_AJAX/";
                    url = url + "ResponseAjax.jsp?lenguaje=jsp&ajax=2";
                    url = url + "&dummy=" + new Date().getTime();
                    //alert(url)

                    request.open("POST", url, true);
                    request.onreadystatechange = Index.updatePageJSP;
                    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    request.send(null);
                }

                Index.updatePageJSP = function()
                {
                    if (request.readyState == 4) {
                        if (request.status == 200) {
                            var data = request.responseText;
                            //alert(data);
                            data = System.Trim(data)
                            alert(data);

                        } else {
                            var message = request.getResponseHeader("Status");
                            if ((message.length == null) || (message.length <= 0)) {
                                alert("Error! Request status is " + request.status);
                            } else {
                                alert(message);
                            }
                        }
                    }
                }

                Index.AjaxPHP = function()
                {
                    //http://localhost/file:/C:\Documents and Settings\Cesar Chavez\Mis documentos\NetBeansProjects\Test_Connection_AJAX\web\ResponseAjax.php
                    var url = "http://localhost:80/";
                    url = url + "ResponseAjax.php?lenguaje=php&ajax=1";
                    //var url = "http://localhost:8080/file:/C:%5CDocuments%20and%20Settings%5CCesar%20Chavez%5CMis%20documentos%5CNetBeansProjects%5CTest_Connection_AJAX%5Cweb%5CResponseAjax.php?lenguaje=php&ajax=1";
                    url = url + "&dummy=" + new Date().getTime();
                    //alert(url)

                    request.open("POST", url, true);
                    request.onreadystatechange = Index.updatePagePHP;
                    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    request.send(null);
                }

                Index.updatePagePHP = function()
                {
                    if (request.readyState == 4) {
                        if (request.status == 200) {
                            var data = request.responseText;
                            //alert(data);
                            data = System.Trim(data)
                            alert(data);

                        } else {
                            var message = request.getResponseHeader("Status");
                            if ((message.length == null) || (message.length <= 0)) {
                                alert("Error! Request status is " + request.status);
                            } else {
                                alert(message);
                            }
                        }
                    }
                }
            </script>
            <!-- <form action="index.jsp?query=1" method="post"> -->
            <form action="http://localhost:80/ResponseAjax.php?lenguaje=php&ajax=1" method="post">
                <input type="hidden" name="rdbms" value="<%=RDBMS%>">
                <input type="hidden" name="server" value="<%=Server%>">
                <input type="hidden" name="port" value="<%=Port%>">
                <input type="hidden" name="db" value="<%=DataBase%>">
                <input type="hidden" name="user" value="<%=User%>">
                <input type="hidden" name="password" value="<%=Password%>">
                <div align="center">
                    <div style="background-Color:gray;width:400px;height:270px;text-align:center;">
                    <br>
                    <p><span>Nombre:</span> <input type="text" value="" name="nombre" id="nombre"></p>
                    <p><span>Apellido:</span> <input type="text" value="" name="apellido" id="apellido"></p>
                    <textarea rows="5" cols="40" id="datos" value=""></textarea>
                    <br>
                    <br>
                    <!-- <input type="submit" value="Enviar"> -->
                    <input type="button" onclick="Index.Ajax()" value="Enviar">
                    <br>
                    </div>
                </div>
                <input type="button" onclick="Index.AjaxJSP()" value="Ajax JSP">
                <input type="button" onclick="Index.AjaxPHP()" value="Ajax PHP">
                <!-- <input type="submit" value="Ajax PHP"> -->
            </form>
            <%
        }
    }else{
    %>
    <form action="index.jsp" method="post">
        <table>
            <tr>
                <td>RDMMS: </td>
                <td><input type="text" name="rdbms" value="mysql"></td>
            </tr>
            <tr>
                <td>Servidor: </td>
                <td><input type="text" name="server" value="localhost"></td>
            </tr>
            <tr>
                <td>Puerto: </td>
                <td><input type="text" name="port" value="3306"></td>
            </tr>
            <tr>
                <td>Base da datos: </td>
                <td><input type="text" name="db" value="testing"></td>
            </tr>
            <tr>
                <td>usuario: </td>
                <td><input type="text" name="user" value="root"></td>
            </tr>
            <tr>
                <td>contrase&ntilde;a: </td>
                <td><input type="text" name="password" value="root"></td>
            </tr>
        </table>
        <input type="submit" value="Conectar">
    </form>
    <% } %>
</body>
</html>