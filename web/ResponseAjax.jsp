<%@ page language = "java" contentType = "text/html; charset = ISO-8859-1"
	import="java.io.*"
	import="java.sql.*"
	import="java.util.*"
	import="com.connection.ConnectionDB"
%>

<%
//out.println(request.getParameter("lenguaje"));
//out.println(request.getParameter("lenguaje").getClass());
//out.println(request.getParameter("lenguaje").equals("jsp"));

if(request.getParameter("lenguaje").equals("jsp")){
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

        ResultSet res = null;
        Statement stmt = connection.createStatement();

        if(request.getParameter("ajax").equals("1"))
        {
            String nombre = request.getParameter("nombre");
            String apellido = request.getParameter("apellido");
            String sql = "";

            //out.println(connection);
            if(connection!=null){
                //out.println(nombre == "");
                //out.println(apellido == "");
                //out.println(nombre == "" && apellido == "");
                if (nombre == "" && apellido == ""){
                    sql = "SELECT * FROM usuario";
                } else {
                    if (nombre != "" && apellido != ""){
                        sql = "SELECT * FROM usuario WHERE nombre = '" + nombre +"' AND apellido = '" + apellido +"'";
                    } else {
                        if (nombre != ""){
                            sql = "SELECT * FROM usuario WHERE nombre = '" + nombre +"'";
                        }

                        if (apellido != ""){
                            sql = "SELECT * FROM usuario WHERE apellido = '" + apellido +"'";
                        }
                    }
                }
                res = stmt.executeQuery(sql);
                
                while(res.next()){
                   out.print(
                   res.getString("nombre") + " " +
                   res.getString("apellido") + "\n"
                   );
                }
            }
        }
    }
}

if(request.getParameter("lenguaje").equals("jsp")){
    if(request.getParameter("ajax").equals("2"))
    {
        out.println("Esto es jsp");
    }
}
%>
