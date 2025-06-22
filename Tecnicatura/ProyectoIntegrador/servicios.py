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
