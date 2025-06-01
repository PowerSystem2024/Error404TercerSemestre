
package domain;


public class Rectangulo extends FiguraGeometrica {
    // Constructor
    public Rectangulo(String tipoFigura){

        super(tipoFigura);
    }
    
    // Implementación Método
    @Override
    public void dibujar(){
        System.out.println("Se imprime un: " + this.getClass().getSimpleName());
    }
}