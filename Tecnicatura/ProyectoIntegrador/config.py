# =============================================================================
# Configuración de la base de datos
# =============================================================================

import os
from supabase import create_client, Client
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

def crear_cliente_supabase():
    """
    Crea y retorna el cliente de Supabase.
    Esta función centraliza la conexión a la base de datos.
    """
    url: str = os.environ.get("SUPABASE_URL")
    key: str = os.environ.get("SUPABASE_KEY")

    if not url or not key:
        raise ValueError("Las variables SUPABASE_URL y SUPABASE_KEY deben estar configuradas")

    return create_client(url, key)

# Cliente global para usar en todo el proyecto
supabase: Client = crear_cliente_supabase()