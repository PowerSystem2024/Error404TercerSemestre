# =============================================================================
# ARCHIVO: servicios.py - Lógica de negocio
# =============================================================================

from models import LibroModel, PrestamoModel, UsuarioModel, SolicitudModel

class BibliotecaService:
    @staticmethod
    def prestar_libro(id_usuario, id_libro):
        """Procesar el préstamo de un libro"""
        # Verificar disponibilidad
        libros = LibroModel.buscar_libros("")
        libro = next((l for l in libros if l['id'] == id_libro), None)

        if not libro:
            return False, "Libro no encontrado"

        if libro['copias_disponibles'] <= 0:
            return False, "No hay copias disponibles"

        # Crear préstamo
        prestamo = PrestamoModel.crear_prestamo(id_usuario, id_libro)
        if not prestamo:
            return False, "Error al crear el préstamo"

        # Actualizar copias disponibles
        nueva_cantidad = libro['copias_disponibles'] - 1
        LibroModel.actualizar_copias_disponibles(id_libro, nueva_cantidad)

        return True, "Préstamo realizado exitosamente"


    @staticmethod
    def devolver_libro(id_prestamo):
        """Procesar la devolución de un libro"""
        # Obtener información del préstamo
        prestamos = PrestamoModel.obtener_prestamos_activos()
        prestamo = next((p for p in prestamos if p['id'] == id_prestamo), None)

        if not prestamo:
            return False, "Préstamo no encontrado"

        # Marcar como devuelto
        PrestamoModel.devolver_libro(id_prestamo)

        # Actualizar copias disponibles
        libro_id = prestamo['id_libro']
        libros = LibroModel.buscar_libros("")
        libro = next((l for l in libros if l['id'] == libro_id), None)

        if libro:
            nueva_cantidad = libro['copias_disponibles'] + 1
            LibroModel.actualizar_copias_disponibles(libro_id, nueva_cantidad)
        return True, "Libro devuelto exitosamente"
