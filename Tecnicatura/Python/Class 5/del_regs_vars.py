import psycopg2

conexion = psycopg2.connect(
    host="127.0.0.1",
    database="Test_bd",
    user="postgres",
    password="admin",
    port='5432'
)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona IN %s'
            entrada = input('Digite los numeros de registros a eliminar (separados por coma):  ')
            valores =(tuple(entrada.split(',')),)
            cursor.execute(sentencia, valores)
            registros_eliminados = cursor.rowcount
            print(f'Los registros elinados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

