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
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = ('tomacio', 'bonati', 'tmbonay@gmail.com', 1)
            cursor.execute(sentencia, valores)
            registros_actualizados = cursor.rowcount
            print(f'Los registros actulizados son: {registros_actualizados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

