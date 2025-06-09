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