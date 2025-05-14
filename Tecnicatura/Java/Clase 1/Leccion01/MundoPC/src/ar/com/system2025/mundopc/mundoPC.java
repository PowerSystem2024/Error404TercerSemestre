package ar.com.system2025.mundopc;

public class mundoPC {

    public static void main(String[] args) {

        // Creación de objetos para la primera orden
        Monitor monitorHP = new Monitor("HP", 13);
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);

        // Creación de objetos para la segunda orden
        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);

        // Inicialización de la primera orden
        Orden orden1 = new Orden();

        // Agregamos computadoras a la orden1
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        orden1.mostrarOrden();

        // Creación y agregación a una segunda orden
        Monitor monitorVariado = new Monitor("LG", 24);
        Teclado tecladoVariado = new Teclado("USB", "Genius");
        Raton ratonVariado = new Raton("USB", "Logitech");
        Computadora computadorasVarias = new Computadora("Computadora de diferentes marcas", monitorVariado, tecladoVariado, ratonVariado);

        Orden orden2 = new Orden();
        orden2.agregarComputadora(computadorasVarias);

        // Mostramos ambas órdenes
        orden1.mostrarOrden();
        orden2.mostrarOrden();

        // Crear más objetos de tipo computadora con todos sus elementos
        Orden orden3 = new Orden();
        for (int i = 1; i <= 10; i++) {
            Monitor monitor = new Monitor("Marca" + i, 20 + i);
            Teclado teclado = new Teclado("USB", "Marca" + i);
            Raton raton = new Raton("Bluetooth", "Marca" + i);
            Computadora comp = new Computadora("Computadora " + i, monitor, teclado, raton);
            orden3.agregarComputadora(comp);
        }

        // Mostrar la orden con 10 computadoras
        orden3.mostrarOrden();
    }
}
