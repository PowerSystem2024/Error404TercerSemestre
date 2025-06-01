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
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s'
            entrada = input ('Digite los id_persona a buscar (separados por coma): ')
            llaves_primarias = (tuple(entrada.split(', ')),)
            cursor.execute(sentencia, llaves_primarias)
            registros = cursor.fetchall()
            for registro in registros:
                print(registro)

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

