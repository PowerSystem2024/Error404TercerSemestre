
package domain;

public class Gerente extends Empleado {
    private String departamento;

    public Gerente(String nombre, double sueldo, String departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    // Sobreescritura del metodo ObtenerDetalles
    @Override
    public String ObtenerDetelles() {
        return super.ObtenerDetelles() + ", Departamento: " + this.departamento;
    }

    // Getters y Setters
    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String obtenerDetalles() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}