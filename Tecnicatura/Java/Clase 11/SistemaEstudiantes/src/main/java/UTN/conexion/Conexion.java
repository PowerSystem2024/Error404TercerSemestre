package UTN.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection(){
        Connection conexion = null;
        //Variables para conectarnos a la base de datos
        var baseDeDatos = "estudiantes";
        var url = "jdbc:mysql://localhost:3306/"+baseDeDatos;
        //Credenciales de mi base de datos local
        var usuario = "user_estudiantes";
        var password = "password1234";

        //Cargamos la clase del driver de mysql en memoria
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url, usuario, password);
        } catch (ClassNotFoundException | SQLException e){
            System.out.println("Ocurrió un error en la conexión: "+e.getMessage());
        }//Fin catch
        return conexion;
    }//Fin método Connection
}