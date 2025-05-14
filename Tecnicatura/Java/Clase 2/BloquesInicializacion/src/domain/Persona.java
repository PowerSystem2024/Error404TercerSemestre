package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;

    // Bloque de inicialización estático
    static {
        System.out.println("Ejecución del bloque estático");
        // Incrementamos el contador en la carga de la clase
        ++Persona.contadorPersonas;
    }

    // Bloque de inicialización NO estático
    {
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersonas++;
    }

    // Constructor
    public Persona() {
        System.out.println("Ejecución del constructor");
    } // Aquí se cierra correctamente la llave del constructor

    // Método getter para idPersona
    public int getIdPersona() {
        return this.idPersona;
    }
}