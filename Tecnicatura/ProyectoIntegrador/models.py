# =============================================================================
# Modelos y operaciones de base de datos
# =============================================================================

from config import supabase
from datetime import datetime, timedelta

class UsuarioModel:
    @staticmethod
    def crear_usuario(username, password, nombre, rol="usuario"):
        """Crear un nuevo usuario en la base de datos"""
        try:
            response = supabase.table('usuarios').insert({
                "username": username,
                "password": password,
                "nombre": nombre,
                "rol": rol
            }).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error al crear usuario: {e}")
            return None

    @staticmethod
    def autenticar_usuario(username, password):
        """Verificar credenciales de usuario"""
        try:
            response = supabase.table('usuarios').select("*").eq('username', username).eq('password', password).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error en autenticación: {e}")
            return None

    @staticmethod
    def obtener_todos_usuarios():
        """Obtener lista de todos los usuarios"""
        try:
            response = supabase.table('usuarios').select("*").execute()
            return response.data
        except Exception as e:
            print(f"Error al obtener usuarios: {e}")
            return []
        

class LibroModel:
    @staticmethod
    def agregar_libro(titulo, autor, genero, isbn, copias_totales):
        """Agregar un nuevo libro a la biblioteca"""
        try:
            response = supabase.table('libros').insert({
                "titulo": titulo,
                "autor": autor,
                "genero": genero,
                "isbn": isbn,
                "copias_totales": copias_totales,
                "copias_disponibles": copias_totales
            }).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error al agregar libro: {e}")
            return None

    @staticmethod
    def buscar_libros(termino_busqueda):
        """Buscar libros por título o autor"""
        try:
            response = supabase.table('libros').select("*").or_(
                f'titulo.ilike.%{termino_busqueda}%,autor.ilike.%{termino_busqueda}%'
            ).execute()
            return response.data
        except Exception as e:
            print(f"Error en búsqueda: {e}")
            return []

    @staticmethod
    def obtener_libros_disponibles():
        """Obtener libros con copias disponibles"""
        try:
            response = supabase.table('libros').select("*").gt('copias_disponibles', 0).execute()
            return response.data
        except Exception as e:
            print(f"Error al obtener libros disponibles: {e}")
            return []

    @staticmethod
    def actualizar_copias_disponibles(id_libro, nueva_cantidad):
        """Actualizar la cantidad de copias disponibles"""
        try:
            response = supabase.table('libros').update({
                'copias_disponibles': nueva_cantidad
            }).eq('id', id_libro).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error al actualizar copias: {e}")
            return None


class PrestamoModel:
    @staticmethod
    def crear_prestamo(id_usuario, id_libro, dias_prestamo=14):
        """Crear un nuevo préstamo"""
        try:
            fecha_prestamo = datetime.now().date()
            fecha_vencimiento = fecha_prestamo + timedelta(days=dias_prestamo)

            response = supabase.table('prestamos').insert({
                "id_usuario": id_usuario,
                "id_libro": id_libro,
                "fecha_prestamo": str(fecha_prestamo),
                "fecha_vencimiento": str(fecha_vencimiento)
            }).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error al crear préstamo: {e}")
            return None

    @staticmethod
    def devolver_libro(id_prestamo):
        """Marcar un libro como devuelto"""
        try:
            fecha_devolucion = datetime.now().date()
            response = supabase.table('prestamos').update({
                'fecha_devolucion': str(fecha_devolucion)
            }).eq('id', id_prestamo).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error al devolver libro: {e}")
            return None

    @staticmethod
    def obtener_prestamos_activos(id_usuario=None):
        """Obtener préstamos activos (no devueltos)"""
        try:
            query = supabase.table('prestamos').select("""
                *,
                usuarios(nombre, username),
                libros(titulo, autor)
            """).is_('fecha_devolucion', 'null')

            if id_usuario:
                query = query.eq('id_usuario', id_usuario)

            response = query.execute()
            return response.data
        except Exception as e:
            print(f"Error al obtener préstamos activos: {e}")
            return []


class SolicitudModel:
    @staticmethod
    def crear_solicitud(id_usuario, id_libro):
        """Crear una nueva solicitud de libro"""
        try:
            response = supabase.table('solicitudes_libros').insert({
                "id_usuario": id_usuario,
                "id_libro": id_libro,
                "estado": "pendiente"
            }).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error al crear solicitud: {e}")
            return None

    @staticmethod
    def obtener_solicitudes_pendientes():
        """Obtener todas las solicitudes pendientes"""
        try:
            response = supabase.table('solicitudes_libros').select("""
                *,
                usuarios(nombre, username),
                libros(titulo, autor)
            """).eq('estado', 'pendiente').execute()
            return response.data
        except Exception as e:
            print(f"Error al obtener solicitudes: {e}")
            return []

    @staticmethod
    def actualizar_estado_solicitud(id_solicitud, nuevo_estado):
        """Actualizar el estado de una solicitud"""
        try:
            response = supabase.table('solicitudes_libros').update({
                'estado': nuevo_estado
            }).eq('id', id_solicitud).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error al actualizar solicitud: {e}")
            return None