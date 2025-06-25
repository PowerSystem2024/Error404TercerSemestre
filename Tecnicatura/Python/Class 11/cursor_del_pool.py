from logger_base import log
from conexion import Conexion

class CursorDelPool:
    def __init__(self):
        self._conexion = None
        self._cursor = None


    def __enter__(self):
        log.debug('Inicio del método __enter__ y with')
        self._conexion = Conexion.obtenerConexion()
        self._cursor = self._conexion.cursor()
        return self._cursor
    
    def __exit__(self, tipo_exeption, valor_exception, detalle_exception):
        log.debug('Inicio del método __exit__')
        if valor_exception:
            self._conexion.rollback()
            log.error(f'Ocurrió una excepción: {valor_exception}')
        else:
            self._conexion.commit()
            log.debug(f'Commit de la transacción')
        self._cursor.close()
        Conexion.liberarConexion(self._conexion)

if __name__ == '__main__':
    with CursorDelPool() as cursor:
        log.debug('dentro del bloque with')
        cursor.execute('SELECT * FROM persona')
        log.debug(cursor.fetchall())