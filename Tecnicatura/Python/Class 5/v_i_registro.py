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
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUE (%s, %s, %s)'
            valores = (
                ('Carlos', 'Lara', 'clara@gmail.com'),
                ('Camilo', 'Martinez', 'asdaaaaaaa@gmail.com'),
                ('Tulio', 'Martinez', 'asdasd@gmail.com'),
                       )
            cursor.executemany(sentencia, valores)
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

