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
