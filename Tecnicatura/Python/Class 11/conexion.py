import psycopg2 as bd
from logger_base import log
import sys

class Conexion:
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = 'admin'
    _DB_PORT = '5432'
    _HOST =  '127.0.0.1'
    _MIN_CONNECTIONS = 1
    _MAX_CONNECTIONS = 5
    _pool = None

    @classmethod
    def obtenerConexion(cls):
        Conexion = cls.obtenerPool().getconn()
        log.debug(f'Conexión obtenida: {Conexion}')
        return Conexion
            
    @classmethod
    def obtenerCursor(cls):
        pass


    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                cls._pool = bd.SimpleConnectionPool(
                    cls._MIN_CONNECTIONS,
                    cls._MAX_CONNECTIONS,
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    database=cls._DATABASE,
                    port=cls._DB_PORT
                )
                log.debug(f'Pool creado: {cls._pool}')
                return cls._pool
            except Exception as e:
                log.error(f'Ocurrió un error al crear el pool: {e}')
                sys.exit()
        else:
            return cls._pool        

    @classmethod
    def liberarConexion(cls, conexion):
        cls.obtenerPool().putconn(conexion)
        log.debug(f'Conexión liberada: {conexion}')    
    
    @classmethod
    def cerrarConexiones(cls):
        cls.obtenerPool().closeall()


if __name__ == '__main__':
    Conexion1= Conexion.obtenerConexion()
    Conexion.liberarConexion(Conexion1)
    Conexion2= Conexion.obtenerConexion()
    Conexion.liberarConexion(Conexion2)