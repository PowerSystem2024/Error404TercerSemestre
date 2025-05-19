package test;

import domain.*;

public class TestClaseObject {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Ana", 5000);
        Empleado empleado2 = new Empleado("Ana", 5000);
        
        if(empleado1 == empleado2){
            System.out.println("Tienen la misma referencia de memoria.");
        }
        else{
            System.out.println("Tienen distinta referencia de memoria.");
        }
        if(empleado1.equals(empleado2)){
            System.out.println("Tienen la misma referencia de memoria.");
        }
        else{
            System.out.println("Tienen distinta referencia de memoria.");
        }
        
        if(empleado1.hashCode() == empleado2.hashCode()){
            System.out.println("Tienen la misma referencia de memoria.");
        }
        else{
            System.out.println("Tienen distinta referencia de memoria.");
        }
    }
}