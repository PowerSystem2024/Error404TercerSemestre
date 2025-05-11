
package Test;

import enumeraciones.Continentes;
import enumeraciones.Dias;

public class TestEnumeraciones {
   public static void main(String[] args) {
       System.out.println("Dia 1: " + Dias.LUNES);
       System.out.println( "Continente No. 4: " +Continentes.AMERICA );
       System.out.println("No. de países en el 4to. continente: " + Continentes.AMERICA.getPaises());
       System.out.println("No. de habitantes en el 4to. continente: " + Continentes.AMERICA.getHabitantes());
   }
   
   private static void indicarDiaSemana(Dias dias){
    switch(dias){
        case LUNES:
            System.out.println("Primer día de la semana");
            break;
        case MARTES:
            System.out.println("Segundo día de la semana");
            break;
             case MIERCOLES:
            System.out.println("Tercer día de la semana");
            break;
        case JUEVES:
            System.out.println("Cuarto día de la semana");
            break;
        case VIERNES:
            System.out.println("Quinto día de la semana");
            break;
        case SABADO:
            System.out.println("Sexto día de la semana");
            break;
        case DOMINGO:
            System.out.println("Séptimo día de la semana");
            break;
        default:
            System.out.println("Día no válido");
            break;
    
}
    }
}