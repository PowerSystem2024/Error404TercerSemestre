package test;

import accesodatos.*;

class TestInterfaces {
    public static void main(String[] args) {
     IAccesoDatos datos = (IAccesoDatos) new ImplementacionMySql();
    //datos.listar();
    //imprimir(datos);
    datos = (IAccesoDatos) new ImplementacionOracle();
    //datos.listar();
    imprimir(datos);
    }
    
    public static void imprimir (IAccesoDatos datos) {
        datos.listar();
    }
}